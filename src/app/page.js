import AppointmentHome from "./Home.jsx";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Doctor Appointment</title>
      <meta name="description" content="Book your appointment with top-rated doctors" />
    </Head>
    <AppointmentHome />
    </>
  )
}
