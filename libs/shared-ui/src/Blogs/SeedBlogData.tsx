import {
  CreateBlogpostDocument,
  CreateBlogpostMutation,
  CreateBlogpostMutationVariables,
  getClient,
} from '@sharknado/cms-api';
import styles from './SeedBlogData.module.css';

const blogs = [
  {
    title: 'When Sharks Fly, So Do I',
    description:
      'You’d think sharks would stick to the water, but no—they had to take to the skies. Fine by me, I’ll just have to bring the fight to them. 🦈✈️',
  },
  {
    title: 'Not Your Average Weather Report',
    description:
      'What’s worse than a storm? A storm full of sharks. No umbrella’s going to save you now, but a chainsaw might. 🌧️🦈',
  },
  {
    title: 'A New Kind of Shark Week',
    description:
      'Forget Shark Week on TV—try living it in real life with a Sharknado overhead. The stakes are a little higher when the sharks are after you. 🦈📺',
  },
  {
    title: 'The Sharks Keep Coming, I Keep Winning',
    description:
      'Every Sharknado brings a new wave of chaos, but I’ve faced them all. These sharks might be relentless, but so am I. 🦈🏆',
  },
  {
    title: 'Sharks Above, Danger Below',
    description:
      'It’s bad enough when sharks are in the water, but now they’re in the sky too? Looks like I’ll have to defend from all angles. 🦈⬆️⬇️',
  },
  {
    title: 'From the Ocean to the Sky—Bring It On',
    description:
      'I’ve battled sharks in the ocean, and now they think they can take me on in the sky? Good luck with that. 🦈💥',
  },
  {
    title: 'These Sharks Don’t Know Who They’re Messing With',
    description:
      'Sharknado or not, I’m not going down without a fight. These sharks picked the wrong guy to mess with. 🦈👊',
  },
  {
    title: 'In the Eye of the Sharknado',
    description:
      'The eye of a Sharknado is supposed to be calm, but with sharks flying around, there’s no such thing as calm. Time to bring the storm to them. 🦈🌪️',
  },
  {
    title: 'When Sharks Attack from Above',
    description:
      'You thought sharks were scary in the water? Try dodging them when they’re falling from the sky. But don’t worry, I’ve got this covered. 🦈💥',
  },
  {
    title: 'My Chainsaw’s Got Some Work to Do',
    description:
      'It’s not every day you get to say you’ve taken out a flying shark with a chainsaw. For me, it’s just another day at the office. 🦈🪚',
  },
  {
    title: 'The Storm Never Ends',
    description:
      'Just when I think it’s over, another Sharknado shows up. But as long as there’s a storm, I’ll be here to stop it. 🦈🌪️',
  },
  {
    title: 'You Can Run, But You Can’t Hide from a Sharknado',
    description:
      'When a Sharknado hits, there’s no place to hide. But I don’t need to hide—I’ll take these sharks head-on. 🦈🏃‍♂️',
  },
  {
    title: 'Sharks in the Air? Not on My Watch',
    description:
      'Sharks might rule the ocean, but they’ve got no business in the sky. Time to send them back where they belong. 🦈✈️',
  },
  {
    title: 'When Sharks Fly, You Fight or Die',
    description:
      'In a Sharknado, it’s survival of the fittest. These sharks might be deadly, but I’m no easy target. 🦈⚔️',
  },
  {
    title: 'The Sky’s the Limit—Even for Sharks',
    description:
      'Sharks flying through the air? It sounds impossible, but that’s the world we live in now. Good thing I’m ready for anything. 🦈☁️',
  },
  {
    title: 'Sharknado Season Never Ends',
    description:
      'Most people have to worry about bad weather—me, I have to worry about Sharknados. But hey, someone’s got to do it. 🦈🌪️',
  },
  {
    title: 'There’s No Escaping a Sharknado',
    description:
      'When a Sharknado hits, there’s no escape. But I don’t plan on running—I plan on winning. 🦈🏃‍♂️',
  },
  {
    title: 'Sharks in the Skies, Chaos on the Ground',
    description:
      'Sharks in the air, chaos on the ground—sounds like a typical day in the life of Fin Shepard. But don’t worry, I’ve got this under control. 🦈🌪️',
  },
  {
    title: 'The Fight of My Life—Again',
    description:
      'Every Sharknado is the fight of my life, but I’ve never backed down from a challenge. These sharks are in for a surprise. 🦈💪',
  },
  {
    title: 'Sharks in the Air? Time to Take Them Down',
    description:
      'Sharks might be the kings of the ocean, but they don’t belong in the air. Time to show them who’s boss. 🦈⬇️',
  },
  {
    title: 'No Rest for the Shark Slayer',
    description:
      'Sharknados keep coming, and I keep fighting. There’s no rest for the shark slayer, but I wouldn’t have it any other way. 🦈💥',
  },
  {
    title: 'Flying Sharks? Just Another Day at Work',
    description:
      'Most people worry about their 9-to-5—me, I worry about flying sharks. Just another day at the office for Fin Shepard. 🦈💼',
  },
  {
    title: 'Sharks on the Move, Fin on the Hunt',
    description:
      'These sharks think they can move into the skies, but they’ve got another thing coming. Time to hunt. 🦈🏹',
  },
  {
    title: 'Sharknado Aftermath: Cleanup on Aisle Sky',
    description:
      'After every Sharknado, there’s a lot of cleanup to do—starting with sending these sharks back to the ocean. 🦈🧹',
  },
  {
    title: 'The Calm Before the Sharknado',
    description:
      'There’s a strange calm before a Sharknado hits, but I know what’s coming. Time to prepare for the storm. 🦈🌪️',
  },
  {
    title: 'Sharks in the Sky? Time to Ground Them',
    description:
      'Sharks might be able to swim, but flying? That’s not going to fly with me. Time to ground these sky-high predators. 🦈🛬',
  },
  {
    title: 'No Shark Left Behind',
    description:
      'When a Sharknado hits, there’s no such thing as leaving a shark behind. Time to take them all out. 🦈🚫',
  },
  {
    title: 'The World’s Gone Crazy—So Have I',
    description:
      'Flying sharks? The world’s gone mad. But in a Sharknado, madness is the only way to survive. 🦈😵',
  },
  {
    title: 'From the Ocean to the Sky—Sharks Everywhere',
    description:
      'Sharks used to be a problem in the ocean—now they’re a problem everywhere. But wherever they go, I’ll be there to stop them. 🦈🚁',
  },
  {
    title: 'Sharks Can’t Fly, But They Try',
    description:
      'Sharks aren’t meant to fly, but in a Sharknado, they give it their best shot. Too bad for them, I’m grounded in reality. 🦈🌪️',
  },
  {
    title: 'The Eye of the Sharknado',
    description:
      'The eye of a Sharknado might be calm, but with sharks flying around, there’s no time to rest. Time to take the fight to the storm. 🦈🌪️',
  },
];

export async function SeedBlogData() {
  const client = await getClient();

  // loop through blog items and call mutation to create blog post
  for (const blog of blogs) {
    await client.mutate<
      CreateBlogpostMutation,
      CreateBlogpostMutationVariables
    >({
      mutation: CreateBlogpostDocument,
      variables: {
        title: blog.title,
        description: blog.description,
      },
    });
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to SeedBlogData!</h1>
    </div>
  );
}

export default SeedBlogData;
