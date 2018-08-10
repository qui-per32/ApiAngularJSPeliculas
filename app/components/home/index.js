import angular from 'angular';
import FilmsService from './films/films.service';
import SeriesService from './series/series-service';
import {FilmsListComponent} from "./films/films-list/films-list.component";
import {SeriesListComponent} from "./series/series-list/series-list.component";
import {FilmsItemComponent} from "./films/films-item/films-item.component";
import {SeriesItemComponent} from "./series/series-item/series-item.component";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/404.component";

const home = angular
.module('home',[])
.service('FilmsService', FilmsService)
    .service('SeriesService', SeriesService)
    .component ('filmsList', FilmsListComponent)
    .component ('filmsItem', FilmsItemComponent)
    .component ('seriesList', SeriesListComponent)
    .component ('seriesItem', SeriesItemComponent)
    .component ('home', HomeComponent)
    .component ('error', ErrorComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('films', {
            url: '/films',
            component: 'filmsList'
        })
        .state('series', {
            url: '/series',
            component: 'seriesList'
        })
         .state('home', {
             url: '/',
             component: 'home'
         })
         .state('error', {
             url: '/error',
             component: 'error'
         });
    $urlRouterProvider.otherwise('/error')
    })
    .name
export default home;
