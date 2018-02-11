import common from './common';
import gallery from './gallery';

const PAGES = {
    common: common,
    gallery: gallery,
};

const UTIL = {
    fire(func) {
        if (func !== '' && typeof(PAGES[func]) === 'function') {
            PAGES[func]();
        }
    },
    initPage() {
        const bodyId = document.body.id;
        UTIL.fire('common');
        UTIL.fire(bodyId);
    }
};

UTIL.initPage();