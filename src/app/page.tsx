import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages } from '~/components/app/home';
import { HomeFooter } from '~/components';
import { getAbout, getLightbox, getProfiles, getStudentGroups } from '~/utils/contentful';

export const dynamic = 'force-static';

async function getData() {
  const about = await getAbout();
  const lightbox = await getLightbox();
  const groups = await getStudentGroups();
  const profiles = await getProfiles();

  return { about, lightbox, groups, profiles };
}

export default async function Page() {
  const { about, lightbox, groups, profiles } = await getData();

  return (
    <>
      <HomeGreeting />
      <div className="max-w-home mx-auto p-8 flex flex-col gap-[calc(80px+2rem)] pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={lightbox} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
      <HomeFooter />
    </>
  );
}
