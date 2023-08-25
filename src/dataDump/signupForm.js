var emojiFlags = require("emoji-flags")

export const names = [
    {
        label: "First name",
        placeholder: '',
        type: 'text',
    },
    {
        label: "Middle name",
        placeholder: '',
        type: 'text',
    },
    {
        label: "Last name",
        placeholder: '',
        type: 'text',
    },
]

export const nationalities = [
    "Kenya",
    "Ethiopia",
    "Uganda",
    "Tanzania",
]

export const genders = [
    "Male",
    "Female",
]

export const countryCodes = [
    {
        flag: emojiFlags.countryCode('KE').emoji,
        code: +254,
    },
    {
        flag: emojiFlags.countryCode('ET').emoji,
        code: +253,
    },
    {
        flag: emojiFlags.countryCode('UG').emoji,
        code: +256,
    },
    {
        flag: emojiFlags.countryCode('TZ').emoji,
        code: +255,
    },
]

export const flagPlaceHolder = emojiFlags.countryCode('US').emoji