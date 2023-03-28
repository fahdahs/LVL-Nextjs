import { Typography } from "@/client/material-tailwind";
import image from "@/assets/download.jpg";
import logo from "@/assets/logo location de voiture laayoune light mode.png";
import Image from "next/image";
//translation 
import {t} from 'i18next';

export default function Cta() {
  return (
    <div className="bg-white dark:bg-[#0a0c0f] pb-16 lg:pb-24 md:pt-4 pt-12 relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl py-24 px-8 shadow-md lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0">
            <div className="w-full h-full absolute bg-black/20" />
            <div className="h-full w-1/2 bg-gradient-to-r from-black/90 to-transparent absolute" />
            <Image
              src={image}
              alt="location de voiture ads"
              className="h-full w-full object-cover"
              placeholder="blur"
            />
          </div>
          <div className="relative lg:col-span-1">
            <Image className="h-12 opacity-95 w-auto" src={logo} alt="" />
            <blockquote className="mt-6 text-white">
              <Typography variant="lead">
              {t('ctaContent')}
              </Typography>
              <footer className="mt-6">
                <Typography variant="small">
                  <span className="block">{t('ctaTitle')}</span>
                  <span>{t('ctaLocation')}</span>
                </Typography>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
