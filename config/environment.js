

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp :{
        
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'aditya98singhal',
            pass: 'limo2706'
        }
    },
    google_clientID: "549867391163-a3128o2mhgbldsaovjm1afakirtmli5v.apps.googleusercontent.com",
    google_clientSecret: "6YgPJZf8MgplQieOkBSZcAYr",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial'
}

const production = {
    name: 'production'
}

module.exports = development;