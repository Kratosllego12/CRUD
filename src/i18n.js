import en from './Locale/en.json';
import fr from './Locale/fr.json';
import ja from './Locale/ja.json';
import {createI18n} from 'vue-i18n'


const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {en, fr, ja}

})

export default i18n;