import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
declare var google;
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    @ViewChild('map') mapElement: ElementRef;
    public map: any;
    public currentLatitude: any;
    public currentLongitude: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
        return this.getCurrentLocation();
    }
    //   presentLoadingDefault() {
    //       this.loadingCtrl.create({
    //         content: 'Please wait...',
    //         duration: 2000,
    //         dismissOnPageChange: true
    //       }).present();
    //     }

    // loadMap() {
    //     this.geolocation.getCurrentPosition().then((position) => {
    //         console.log(position);
    //         let lat = position.coords.latitude;
    //         let lng = position.coords.longitude;
    //         let latLng = new google.maps.LatLng(lat, lng);

    //         console.log(lat, lng);

    //         let mapOptions = {
    //             center: latLng,
    //             zoom: 15,
    //             map: this.map,
    //             mapTypeId: google.maps.MapTypeId.ROADMAP
    //         }

    //         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    //         let marker = new google.maps.Marker({
    //             position: latLng,
    //             map: this.map,
    //             animation: google.maps.Animation.DROP
    //         })
    //         // let content = "<h4>Your Location!</h4>";   
    //         // let infoWindow = new google.maps.InfoWindow({
    //         //   content: content
    //         // });

    //         google.maps.event.addListener(marker, 'click', () => {
    //             console.log("marker");
    //         });

    //     }, (err) => {
    //         console.log(err);
    //     });
    // }
    getCurrentLocation() {
        this.geolocation.getCurrentPosition().then((position) => {
            this.currentLatitude = position.coords.latitude;
            this.currentLongitude = position.coords.longitude;
            let currentlatLng = new google.maps.LatLng(this.currentLatitude, this.currentLongitude);
            console.log("current position", this.currentLatitude + this.currentLongitude);
            let mapOptions = {
                center: currentlatLng,
                zoom: 10,
                map: this.map,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            let storeLocator = new google.maps.Marker({ map: this.map, position: currentlatLng, title: 'Click to zoom' });
            google.maps.event.addListener(storeLocator, 'click', () => {
                console.log("marker");
            });
        }, (err) => {
            console.log(err);
        });

    }
    getMarkers() {

    }





}
