# gflix

gflix is an Angular 6+ application that uses the [gflix-server](https://github.com/ryanjerskine/gflix-server) to display media that is scraped from a Google Drive account. This is meant to be a Netflix/Plex/Emby clone that uses Google Drive as a backing store. See the [gflix-server](https://github.com/ryanjerskine/gflix-server) page for more details.

## Development

The gflix-app is designed for standalone development. It has mock json files that act as a substitue for API calls. Theses files can be found in the /assets/jsonMocks directory. In order to use the json mocks, the jsonBackend property must be set to true in the enviroment.ts file (this is set to true by default). You can be up and running with:

```
git clone https://github.com/ryanjerskine/gflix-app.git
npm install
ng serve
```

## Screenshots

Home
![picture alt](https://i.imgur.com/6KZdaU4.png "Home")

Movie
![picture alt](https://i.imgur.com/Cak2i5w.png "Movie")

TV Show
![picture alt](https://i.imgur.com/YrDACju.png "TV Show")

Dashboard
![picture alt](https://i.imgur.com/AdVZXQ4.png "Dashboard")

## Roadmap

There is currently no roadmap for any of the gflix projects. I would like to start work on a swagger specification for the API. This would allow development of apps for other devices to be developed without the [gflix-server](https://github.com/ryanjerskine/gflix-server) needing to be complete.
