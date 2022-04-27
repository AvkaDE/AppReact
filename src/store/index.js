import { makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent, getEvent, deleteArchiveEvents } from "../api";
import moment from "moment";

class EventsStore {
    data = [];
    filtredData = [];

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });

        onBecomeObserved(this, 'data', this.fetch);
    }

    get archiveData() {
        return this.data.filter(x => x.archive)
    }

    get notArchiveData() {
        return this.data.filter(x => !x.archive)
    }
    
    get pastData() {
        return this.data
          .filter(x => moment(x.date).isBefore(moment(), 'day') && !x.archive);
    }
    
    get todayData() {
        return this.data
          .filter(x => moment(x.date).isSame(moment(), 'day') && !x.archive);
    }
    
    get futureData() {
        return this.data
          .filter(x => moment(x.date).isAfter(moment(), 'day') && !x.archive);
    }
    
    get favoriteData() {
        return this.data
          .filter(x => x.favorite && !x.archive);
    }

    get newSortedData() {
        return this.filtredData
          .slice()
          .sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            return bDate - aDate
          })
    }

    get oldSortedData() {
        return this.filtredData
          .slice()
          .sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            return aDate - bDate
          })
    }

    get defaultSortedData() {
        return this.data
          .filter(x => !x.archive)
          .sort((a, b) => (a._id > b._id))
    }

    *fetch() {
        const response = yield getEvents();
        this.data = response
        this.filtredData = response.filter(x => !x.archive); 
    }

    getEvent(id) {
        return getEvent(id)
    }

    *addEvent(data) {
        yield addEvent(data);
        yield this.fetch();
    }

    *editEvent(data) {
        yield editEvent(data);
        yield this.fetch();
    }

    *deleteEvent(id) {
        yield deleteEvent(id);
        yield this.fetch();
    }

    *deleteArchiveEvents() {
        yield deleteArchiveEvents();
        yield this.fetch();
    }
}

export const events = new EventsStore();