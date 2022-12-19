import images from "./images"

const  English=
    {
        "translation": {
            "choose_language_title" : "Choose app language",
            "choose_language" : "English (Default)",
            "btnContinue" : "Continue",
            "language_select" : "English",
            "subtitle" : "English (Default)",
            "enter_mobile_number" : "Enter your mobile number",
            "use_number_whatsapp" : "Use this number for WhatsApp communication as well.",
            "mobile_number" : "Mobile number",
            "country" : "Country",
            "confirm_code" : "Confirm Code",
            "share_your_location" : "Share your location",
            "location_text" : "We use this information to show you the Metaverse services available near you.",
            "pin_code" : "PIN Code",
            "what_your_name" : "What's your name?",
            "full_name" : "Full name",
            "when_your_birthday" : "When's your birthday?",
            "dob" : "Date of birth",
            "what_your_gender" : "What's your gender?",
            "female" : "Female",
            "male" : "Male",
            "other" : "Other",
            "prefer_not_to_say" : "Prefer not to say",
            "enter_6_digits" : "Enter the 6-digit code",
            "enter_6_digits_text" : "We've sent an SMS with 6-digit code to your phone",
            "resend_code" : "Didn't receive code? You can retry",
            "resend_OTP" : "Didn't receive code?"
        }
    }

const Kanada={
    "translation": {
        "choose_language_title" : "ಅಪ್ಲಿಕೇಶನ್ ಭಾಷೆಯನ್ನು ಆರಿಸಿ",
        "choose_language" : "Kannada",
        "btnContinue" : "ಮುಂದುವರಿಸಿ",
        "language_select" : "ಕನ್ನಡ",
        "subtitle" : "Kannada",
        "enter_mobile_number" : "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        "use_number_whatsapp" : "WhatsApp ಸಂವಹನಕ್ಕಾಗಿಯೂ ಈ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ.",
        "mobile_number" : "ಮೊಬೈಲ್ ನಂಬರ",
        "country" : "ದೇಶ",
        "confirm_code" : "ಕೋಡ್ ದೃಢೀಕರಿಸಿ",
        "share_your_location" : "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
        "location_text" : "ನಿಮ್ಮ ಹತ್ತಿರ ಲಭ್ಯವಿರುವ ಮೆಟಾವರ್ಸ್ ಸೇವೆಗಳನ್ನು ನಿಮಗೆ ತೋರಿಸಲು ನಾವು ಈ ಮಾಹಿತಿಯನ್ನು ಬಳಸುತ್ತೇವೆ.",
        "pin_code" : "ಪಿನ್ ಕೋಡ್",
        "what_your_name" : "ನಿನ್ನ ಹೆಸರೇನು?",
        "full_name" : "ಪೂರ್ಣ ಹೆಸರು",
        "when_your_birthday" : "ನಿಮ್ಮ ಜನ್ಮದಿನ ಯಾವಾಗ?",
        "dob" : "ಹುಟ್ತಿದ ದಿನ",
        "what_your_gender" : "ನಿಮ್ಮ ಲಿಂಗ ಯಾವುದು?",
        "female" : "ಹೆಣ್ಣು",
        "male" : "ಪುರುಷ",
        "other" : "ಇತರೆ",
        "prefer_not_to_say" : "ಹೇಳದಿರಲು ಆದ್ಯತೆ",
        "enter_6_digits" : "6-ಅಂಕಿಯ ಕೋಡ್ ನಮೂದಿಸಿ",
        "enter_6_digits_text" : "ನಾವು ನಿಮ್ಮ ಫೋನ್‌ಗೆ 6-ಅಂಕಿಯ ಕೋಡ್‌ನೊಂದಿಗೆ SMS ಕಳುಹಿಸಿದ್ದೇವೆ",
        "resend_code" : "ಕೋಡ್ ಸ್ವೀಕರಿಸಲಿಲ್ಲವೇ? ನೀವು ಮರುಪ್ರಯತ್ನಿಸಬಹುದು",
        "resend_OTP" : "ಕೋಡ್ ಸ್ವೀಕರಿಸಲಿಲ್ಲವೇ?"
    }
}

export const dataList = 
[
    {
    userId:'1',
    campaigns_sub:"bot_onboarding",
    img:images.botImg
    },
    {
    userId:'2',
    campaigns_sub:"pay_onboarding",
    img:images.whatsappImg
    }
]

export const ProductBotData=[
    {  id:11,
        ProductImg :images.pro2,
        title: "B 18",
        pdfUrl:"https://strapi.dev.1verse.live/uploads/dummy_d97ff1e4a0.pdf",
        backgroundColor:"#000"
    
    },
    {   id:22,
        ProductImg: images.pro1,
        title: "D 19",
        pdfUrl:"https://strapi.dev.1verse.live/uploads/dummy_d97ff1e4a0.pdf",
        backgroundColor:"#D3D5D5"
    }
]

export default{
    English,
    Kanada
}