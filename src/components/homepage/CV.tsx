export default async function CV() {
  return (
    <div className="flex md:flex-2 flex-col md:flex-row ">
      <div className="flex items-center flex-col  md:w-1/3 bg-cover">
        <p className="font-bold text-xl "> CV</p>
        <h2>Menntun</h2>
        <ul className="list-disc ml-4">
          <li>HÍ - Ferðamálafræði</li>
          <li>HR - Tölvunarfræði</li>
        </ul>
        <h2>Starfsreynsla</h2>
        <ul className="list-disc ml-4">
          <li>FJS</li>
          <li>Reiknistofa Bankanna</li>
        </ul>
        <a href="/cv-test.pdf" download>
          {" "}
          Sækja ferilsrká 📋
        </a>
      </div>
      <div className=" md:w-2/3 text-center">
        <h1 className="font-extrabold">Smá texti um mig</h1>
        <p>
          Ég heiti Ólafur Svalur og er að læra að nota Next.js. Þetta er
          prófunarverkefni til að prófa hvernig það virkar.
        </p>
      </div>
    </div>
  );
}
