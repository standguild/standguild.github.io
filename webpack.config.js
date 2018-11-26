module.exports = {
  
    "mode": "development",
    "entry": "./webpack/entry.js",
    "output": {
        "path": __dirname+'/assets/javascripts/',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/env",
                            "@babel/react"
                        ]
                    }
                }
            }
        ]
    }

};
