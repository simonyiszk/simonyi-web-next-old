import Image from 'next/image';

function HomeHeader() {
  return (
    <div className="flex gap-x-16 gap-y-8 justify-center items-center flex-wrap p-8">
      <a className="h-[50px] w-[188px] relative" href="http://www.bme.hu/" target="_blank" rel="noreferrer">
        <Image src="/images/bme/bme.png" alt="Logo of BME" fill />
      </a>
      <a className="h-[50px] w-[50px] relative" href="http://www.vik.bme.hu/" target="_blank" rel="noreferrer">
        <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill />
      </a>
      <a className="w-auto md:w-[188px]" href="https://svie.hu/" target="_blank" rel="noreferrer">
        <div className="h-[50px] w-[160px] relative">
          <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill />
        </div>
      </a>
    </div>
  );
}

export { HomeHeader };
