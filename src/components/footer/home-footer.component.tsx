import Image from 'next/image';
import { Link } from '../link';

function HomeFooter() {
  return (
    <div className="flex flex-col items-center bg-darkmode_regular gap-8 p-8">
      <div className="flex flex-wrap flex-col sm:flex-row items-start max-w-home gap-16 pb-8 justify-evenly w-auto md:w-full">
        <div className="flex flex-col gap-1">
          <h2 className="pb-4 text-h2 font-heading">Elérhetőség</h2>
          <Link
            className="text-simonyi_zold font-body"
            href="mailto:info@simonyi.bme.hu"
            title="info@simonyi.bme.hu"
            target="_blank"
            rel="noreferrer"
          >
            info@simonyi.bme.hu
          </Link>
          <p className="mt-4 font-body">
            1117 Budapest,
            <br />
            Irinyi József utca 42, 1320
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="pb-4 text-h2 font-heading">Weboldalaink</h2>
          <Link
            className="text-simonyi_zold font-body"
            href="https://konferencia.simonyi.bme.hu/"
            title="konferencia.simonyi.bme.hu"
            target="_blank"
            rel="noreferrer"
          >
            Simonyi Konferencia
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://tanfolyam.simonyi.bme.hu/"
            title="tanfolyam.simonyi.bme.hu"
            target="_blank"
            rel="noreferrer"
          >
            Simonyi tanfolyamok
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://termek.sch.bme.hu/"
            title="termek.sch.bme.hu"
            target="_blank"
            rel="noreferrer"
          >
            Terem- és eszközbérlés
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://simonyi.bme.hu/ntp2021"
            title="Nemzeti Tehetség Program 2021"
            target="_blank"
            rel="noreferrer"
          >
            NTP-SZKOLL-21-0078
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://simonyi.bme.hu/ntp2022"
            title="Nemzeti Tehetség Program 2022"
            target="_blank"
            rel="noreferrer"
          >
            NTP-SZKOLL-22-0081
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="pb-4 text-h2 font-heading">Közösségi hálónk</h2>
          <Link
            className="text-simonyi_zold font-body"
            href="https://www.facebook.com/simonyiszk"
            title="facebook.com/simonyiszk"
            target="_blank"
            rel="noreferrer"
          >
            Facebook oldal
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://www.instagram.com/simonyiszk/"
            title="instagram.com/simonyiszk"
            target="_blank"
            rel="noreferrer"
          >
            Instagram profil
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://www.youtube.com/@SimonyiSzakkoli"
            title="youtube.com/@SimonyiSzakkoli"
            target="_blank"
            rel="noreferrer"
          >
            YouTube csatorna
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://www.linkedin.com/company/simonyi/"
            title="linkedin.com/company/simonyi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profil
          </Link>
          <Link
            className="text-simonyi_zold font-body"
            href="https://github.com/simonyiszk"
            title="github.com/simonyiszk"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profil
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-8">
        <Link className="h-[60px] w-[225px] relative" href="http://www.bme.hu/" target="_blank" rel="noreferrer">
          <Image src="/images/bme/bme.png" alt="Logo of BME" fill />
        </Link>
        <Link className="h-[60px] w-[60px] relative" href="http://www.vik.bme.hu/" target="_blank" rel="noreferrer">
          <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill />
        </Link>
        <Link className="w-auto md:w-[225px]" href="https://svie.hu/" target="_blank" rel="noreferrer">
          <div className="h-[60px] w-[192px] relative">
            <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill />
          </div>
        </Link>
      </div>
      <Link href="https://github.com/simonyiszk/simonyi-web-next">
        <p className="text-center font-body">github.com/simonyiszk/simonyi-web-next</p>
      </Link>
    </div>
  );
}

export { HomeFooter };
