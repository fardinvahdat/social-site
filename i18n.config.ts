
import fa from '@/lang/fa.js'
import en from '@/lang/en.js'
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
          ...en
      },
      fa: {
          ...fa
      }
    }
  }))