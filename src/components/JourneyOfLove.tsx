import { PoemCard } from './PoemCard';
import { FloatingElements } from './FloatingElements';
import { DancingPandas } from './DancingPandas';
import romanticBackgroundVideo from '@/assets/romantic-background-video.mp4';

export const JourneyOfLove = () => {
  const poemSections = [
    {
      text: "On this road alone in a long while now, just this one heart and the distance of the throne from the roses been hurting from all the sharp needles that slice into my skin to the point of almost giving up"
    },
    {
      text: "Why is being alive in life so difficult to live Just these two hands of mine, how far can I make it But it's a human heart that kept promises, not gonna give up"
    },
    {
      text: "Looking up at the dark sky, there's no star from this end tonight kept telling myself, there is still a long road ahead of me, Still true love that guides my way, even just a tiny light, I've lost my way; your tiny light will help me there."
    },
    {
      text: "Time will always keep it going; time never pauses or waits for us. No matter what, we will have to find our way to walk with it. Picking up all the mistakes, little pieces, and learning from them. All of the pain will remind me to keep moving forward."
    },
    {
      text: "Life starts with never giving up. Just remember to stay focused, life journey is mine, make it meaningful."
    },
    {
      text: "There's a night with no starlight, and I will still have to keep moving. I know true love, you are out there, shining a tiny light when I'm lost, help my way to get to you."
    },
    {
      text: "I believe this journey will guide me on my way to get to you. As long as there is still a tiny light from above the sky, I will make it to you."
    },
    {
      text: "Being all alone in the cold, long night, face up to the sky, it reminded me of how I am today. All those years of being alone, it was deep in my soul, down to my roots, how I became who I am today."
    },
    {
      text: "All I remember is that I prayed as hard as I could to make it to you one day. May all the power of the Universe be ours, one true love to protect us before I get to you. May our hearts be strong, and never give up on us."
    },
    {
      text: "As long as the night is still up above the sky, this human heart will keep moving forward. May this true love guide my way to the end of the tunnel light, love waits for me, don't give up, cuz I'm almost there."
    },
    {
      text: "There must be a good reason why we are here; it has to be our reason why. This journey, as long as the sky is still shining with stars, I know where you are. keep your shine, hunn, I will be there. I will make it to the end of the tunnel."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
      >
        <source src={romanticBackgroundVideo} type="video/mp4" />
      </video>
      
      {/* Darker romantic overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      <div className="fixed inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      
      {/* Dancing Pandas */}
      <DancingPandas />
      
      {/* Floating elements */}
      <FloatingElements />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-cartoon text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text cartoon-title bouncy-text slow-fade-in">
              A Journey of Love 🐼✨
            </h1>
            <p className="font-playful text-2xl md:text-3xl text-primary/90 mb-12 slow-fade-in cartoon-text">
              An enchanting visual story about finding your way through life's magical journey 🐼💫
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto slow-fade-in" />
          </div>
        </section>

        {/* Poem Sections */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {poemSections.map((section, index) => (
              <PoemCard key={index}>
                <p className="font-playful text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 cartoon-text slow-fade-in">
                  {section.text}
                </p>
              </PoemCard>
            ))}
          </div>
        </section>

        {/* Final Message */}
        <section className="py-20 px-4">
          <PoemCard className="text-center pulse-glow">
            <blockquote className="font-script text-3xl md:text-4xl text-primary mb-6 cartoon-text bouncy-text">
              "This journey of love never ends" 🐼💕
            </blockquote>
            <p className="font-rounded text-xl text-foreground/80 cartoon-text">
              — crafted with love by <span className="text-primary font-bold gradient-text">Etuuu</span> 🐼✨
            </p>
          </PoemCard>
        </section>

        {/* Spacer for better ending */}
        <div className="h-20" />
      </div>
    </div>
  );
};