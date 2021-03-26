const STORAGE_KEY = "todolist";

const StoargeService = {
    save(data = []) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    load() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    },
};

export default StoargeService;
