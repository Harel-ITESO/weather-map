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
                Aqui iria el mapa
            </div>
        </section>
    );
}
