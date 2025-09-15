import React from "react";
import ReactPlayer from "react-player";

const ProjectsContent = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20">
      <div className="mt-10 sm:mt-16">
        <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent inline-block">
          Projects
        </div>
        <hr className="border-t-2 border-yellow-400 my-5" />

        <div className="space-y-10">
          {/* Project 1 */}
          <div className="border border-orange-400 p-4 sm:p-6 rounded-lg">
            <div className="text-orange-400 text-xl sm:text-2xl underline font-semibold">
              Application for IoT based BeeHive Monitoring System
            </div>

            <div className="mt-4 border border-yellow-400 rounded-lg overflow-hidden">
              <video className="w-full h-auto" controls muted>
                <source src="/assets/WebPage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="text-orange-400 text-base sm:text-lg mt-4 leading-relaxed">
              This project integrates IoT and AI for smart beehive monitoring
              and predictive health management. Using DHT11 sensors and a load
              cell, it continuously tracks temperature, humidity, and hive
              weight. An ESP32 microcontroller sends data via MQTT to a Flask
              backend and PostgreSQL database, with real-time dashboards built
              in Next.js. Predictive models using LSTM outperform GRU in
              forecasting swarming conditions, enhancing early intervention.
              Field-tested in live hives, the system enables remote, data-driven
              beekeeping decisions. This innovation improves hive health,
              reduces manual inspections, and promotes sustainable apiculture
              through intelligent monitoring and prediction.
            </p>
          </div>

          {/* Project 2 */}
          <div className="border border-orange-400 p-4 sm:p-6 rounded-lg">
            <div className="text-orange-400 text-xl sm:text-2xl underline font-semibold">
              IoT-Based Fleet Management and Telemetry System
            </div>

            <div className="mt-4 border border-yellow-400 rounded-lg overflow-hidden">
              <video className="w-full h-auto" controls muted>
                <source src="/assets/Website_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="text-orange-400 text-base sm:text-lg mt-4 leading-relaxed">
              This project introduces a custom-built telemetric control unit for
              fleet management, designed to operate independently of built-in
              vehicle telemetry ports. Using an ESP32 microcontroller connected
              to an ELM327 OBD2 scanner, the system collects key data such as
              speed, fuel level, and coolant temperature. An integrated axle
              sensor monitors container load for logistics optimization. Data is
              transmitted to the cloud via MQTT for real-time visualization and
              analysis. The solution enhances vehicle monitoring, improves
              operational efficiency, and supports data-driven decision-making
              through a live dashboard, making it ideal for modern fleet
              operations in logistics and transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
