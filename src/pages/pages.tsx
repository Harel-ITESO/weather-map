"use client";
//Imports
import { useState } from "react";
import "../styles/pages.css"


export default function Home() {
    //Typescript


    //HTML
    return (
        <section className="section-container">
            {/*Titulo*/}
            <h2 className="text-xl font-semibold text-center heading-text">
                Haz clic en el mapa para obtener información del clima
            </h2>

            {/*Boton*/}
            <div className="my-4 flex justify-center">
                <button className="map-button">
                    Click Placeholder para el Mapa
                </button>
            </div>

            {/*Mapa simulado*/}
            <div className="map-container text-center">
                Aqui iria el mapa (Simulacion)

                {/*Iframe GoogleMaps*/}
                <iframe className="map-container" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.502138974836!2d-103.41466009999999!3d20.608379600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad6363a15d99%3A0x35dfe443ec2fc6c6!2sITESO%2C%20Universidad%20Jesuita%20de%20Guadalajara!5e0!3m2!1ses!2smx!4v1737682644966!5m2!1ses!2smx" loading="lazy" />
            </div>
        </section>
    );
}
