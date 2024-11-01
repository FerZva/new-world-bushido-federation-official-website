import React from "react";
import CEOPhoto from "../assets/CEO.png";
import WBFLogo from "../assets/WORLD-BUSHIDO.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full">
      <div className="bg-rose-700 flex flex-wrap justify-center flex-col lg:flex-row">
        <div className="px-1 lg:px-10 py-2 lg:py-14 h-auto">
          <Image
            src={CEOPhoto}
            width={1000}
            height={1000}
            quality={80}
            alt="CEO Hanshi Jorge Borjas Photo"
            className=" max-w-[500px]  md:min-h-[450px] lg:min-h-[550px] w-full m-auto"
          />
        </div>
        <div className="px-2 py-1 lg:py-6 mt-12 md:mt-6 lg:px-10 max-w-[620px]">
          <h1 className="text-[40px] font-extrabold py-4">
            Welcome to <br /> World Bushido Federation
          </h1>
          <p className="py-4">
            I am Hanshi Jorge Borjas, Founder of Bushido Federation and World
            Bushido Federation. This idea came to me after having spent most of
            my life studying the different Martial Arts and hoping in a
            unification as well as teaching “Bushido” (Warriors Way) to our
            students and those that did not know about the way.
          </p>
          <p className="py-4">
            This came to me after continuously observing the rivalry between the
            different Martial Arts Schools, and listening to the “Sensei”,
            “Sifu”, “Sabonnim”, “Guachannim” and “Soke” telling their students
            that their styles or system was the best, and according to them
            other systems don&#39;t even exist. The truth is that it depends on
            who is teaching as there are no “Bad Students “.
          </p>
          <p className="py-4">
            Bushido emphasize and negates everything priorly written, as it
            guides us to: Humility, Integrity, Respect, Honor, Love and mostly
            Honor. Fellow Martial Artist let&#39;s unite and teach what
            Matsutatsu Oyama founder of Kyokushin, Gichin Funakoshi, “Father of
            Modern Karate, Gogen Yamaguchi, Founder Internacional Karate-Do Goku
            Kai and Morehei Ueshiba the Founder of Aikido the “Art of Love and
            Harmony”. Let&#39;s leave our disparities aside and let&#39;s follow
            in their footsteps.
          </p>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={WBFLogo}
            alt=""
            width={300}
            height={400}
            className="m-auto my-8"
          />
        </div>
        <div>
          <h2 className="text-center text-[40px] font-extrabold">
            Our History
          </h2>
          <p className="px-2 lg:px-8 py-4">
            World Bushido Federation was created due to all the disparity I have
            encountered throughout the different Martial Arts system all over
            the World. There the idea to unify Martial Arts through one
            Federation that would unite all systems by using the Warriors
            Code(Bushido) by teaching it to our students and followers.
          </p>
          <p className="px-2 lg:px-8 py-4">
            The year was 2007 when this idea came up after watching the rivalry
            between the Martial Arts Schools, listening to the: “Sensei’s”,
            “Sifus”, “Sabonnims”, “Guachannims”, “Soke” telling their students
            that their system was the best around and according to them the
            other styles do not exist. The truth of it all is that there is no
            “bad students” as it all depends on who is teaching, this taught me
            that there is only bad “Teachers”.
          </p>
          <p className="px-2 lg:px-8 py-4">
            Bushido emphasizes and at the same time negates all written above.
            Since it directs us to: Humility,Integrity, Respect, Humbleness,
            Honesty, Compassion and above all unrelentless Honor. Most of the
            founding Fathers, Matsutatsu Oyama, founder of Kyokushin, Guchin
            Funakoshi, founder of “Modern Karate” as well as the founder of the
            International Karate-Do Goku Kai and let’s not forget Morihei
            Ueshiba O Sensei, founder of Aikido the “Art of love and Harmony”
            they left a legacy for us to follow. World Bushido Federations
            vision is to unite all Martial Arts in one big Family we are not
            asking you to change your system, just to apply the 7 Virtues of
            Bushido and make them a household name all over the World by getting
            all the “Real Grandmasters” to teach those Virtues so we can reach
            the entire Globe.
          </p>
          <p className="px-2 lg:px-8 py-4">
            Our mission is to spread the message in regards to the “Warriors
            Code” (Bushido) and stick to what we were taught when we began to
            learn Martial Arts, there should be no disparities between us as we
            learn and teach different systems. But, mostly my goal has been to
            teach people not to forget where they come from and that nobody is
            better than anybody. We have different mind sets, yet our goals as
            members of World Bushido Federation should be the same.
          </p>
          <p className="px-2 lg:px-8 py-4">
            World Bushido Federation plans to be unique all over the Globe, we
            will hold events, tournaments, seminars, always withholding our
            beliefs in the Way of the Warrior as the will of God. As we are
            traditional in everyway, as the “Samurai” were in simple words we
            are the “Samurai” of this era.
          </p>

          <p className="px-2 py-4 text-center font-extrabold">
            Hanshi Jorge Borjas, Ph.D
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
