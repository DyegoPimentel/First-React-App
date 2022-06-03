// Import Languages
import { messages as pt_brMessages } from './pt-br'
import { messages as en_gbMessages } from './en-gb'

// Object with all languages
const messages = {
    ...pt_brMessages,
    ...en_gbMessages
}

export { messages }