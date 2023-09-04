import Alpine from 'alpinejs';
import AnnouncementBar from './AnnouncementBar';

window.Alpine = Alpine;

// Components
Alpine.data('AnnouncementBar', AnnouncementBar);

Alpine.start();
