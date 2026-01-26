import { useState } from "react";
import Category from "./Category";
import Modal from "./Modal";




const DATA = [
  {
    title: "Category I (Classes 1–4)",
    competitions: [
      {
        name: "Kalaa Anurag (Drawing and Coloring)",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Judgement Criteria: Presentation, Creativity and Neatness",
          "Theme: Indian Village life",
          "Participants are required to draw only on the A4 sheets provided by the organizing committee",
          "Allowed items include graphite pencils, color pencils, crayons, erasers (standard rubber and kneaded), ruler (scale), blending stumps (tortillons), sharpener, charcoal and watercolor",
          "These must be brought by participants and will not be provided by the institution",
          "Participants must write their name and assigned roll number clearly on the top of the sheet",
          "Any form of cheating or malpractice will lead to immediate disqualification",
          "Use of mobile phones and other electronic devices is strictly prohibited",
          "Completed artwork must be submitted to the event in-charge before leaving the competition area",
          "The decision of the judges will be final and binding"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Fancy Dress Competition",
        rules: [
          "Time limit: 2 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Costume, Character, Content, Presentation Skills and Body Language",
          "Each participant will have 2 minutes to present with a 30-second buffer; exceeding this will lead to deduction of marks",
          "Participants are encouraged to give a self-introduction with short dialogues or verses relevant to the chosen character",
          "Soundtracks and props may be used",
          "Participants must arrive at the venue 10–15 minutes before the competition",
          "Location of the event will be informed on the day",
          "The decision of the judges will be final and binding"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Desha Bhakti Geete (Patriotic Singing)",
        rules: [
          "Time limit: 3 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Vocal expression, intonation, rhythm, pitch, tempo and overall presentation",
          "Songs must be in Kannada, Hindi or Sanskrit",
          "Participants must introduce themselves with their name and school name before starting; introduction time is not included",
          "A 30-second buffer is allowed and exceeding it will lead to deduction of marks",
          "Karaoke tracks are not allowed",
          "Instruments are not permitted except Taanpura if brought by the participant",
          "The judges’ decision will be final and binding"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Shloka Chanting",
        rules: [
          "Time limit: 3 + 1 minutes (Individual Event)",
          "Judgement Criteria: Voice, tone, pronunciation of words and posture",
          "Participants must introduce themselves with name and school name; introduction time is not included",
          "Voice must be loud and clear",
          "Pronunciation must be accurate and meaning should remain intact",
          "Chanting must be completed within the allotted time and extra time will lead to deduction of points",
          "Backing music or external audio is strictly prohibited",
          "The judges’ decision will be final and binding"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Akshara Aradhana (Spell Bee)",
        rules: [
          "Round 1: Written Spelling Test",
          "Time limit: 30 seconds per word",
          "Judgement Criteria: Correctness of spelling",
          "Language: English",
          "Writing sheets will be provided",
          "Participants must bring their own pens or pencils",
          "Requests for repetition, definition or part of speech are allowed",
          "All entries must be written neatly and clearly",
          "Only single entries are permitted; multiple entries will not be accepted",
          "Cheating or malpractice will result in immediate disqualification",
          "Mobile phones and electronic devices are strictly prohibited",
          "Participants with the most accurate entries will qualify for the next round",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Katha Vismaya (Story Telling)",
        rules: [
          "Time limit: 3 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Clarity, pronunciation, grammar, voice modulation and fluency",
          "Participants must introduce themselves with name and school name; introduction time is excluded",
          "A 30-second buffer is allowed and exceeding it will lead to deduction of marks",
          "The story must include a moral or message and must be memorized, not read",
          "Late arrivals will result in automatic disqualification",
          "Judges’ decision will be final and binding"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Kavyanjali (Poem Recitation)",
        rules: [
          "Time limit: 3 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Content of poem, poise, diction and pronunciation",
          "Participants must introduce themselves with name and school name; introduction time is excluded",
          "A 30-second buffer is allowed and exceeding it will lead to deduction of marks",
          "Poems may be recited in English, Hindi or Kannada and must not be inappropriate",
          "Participants may either recite or sing the poem",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
    ],
  },

  {
    title: "Category II (Classes 5–7)",
    competitions: [
      {
        name: "Bhakti Geethe (Devotional Singing)",
        rules: [
          "Time limit: 3 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Vocal expression, intonation, rhythm, pitch, tempo and overall presentation",
          "Songs must be in Kannada, Hindi or Sanskrit",
          "Participants must introduce themselves with name and school name; introduction is excluded from time",
          "A 30-second buffer is allowed and exceeding it will lead to deduction of marks",
          "Karaoke tracks and instruments are not permitted except Taanpura if brought",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Quiz Competition",
        rules: [
          "Team size: 3 members from the same school",
          "Topic: General knowledge and current affairs",
          "Levels include Think Tank (Written Test) and Rapid Recall (Oral Test)",
          "Questions will be in English or Kannada based on team preference",
          "One registration per team must be done by the team leader",
          "Use of mobile phones or electronic devices is strictly prohibited",
          "Participants may challenge questions at the end of each round",
          "Selection for subsequent rounds is at the Quizmaster’s discretion",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Painting Competition",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Theme: Folk and Classical art of India",
          "Judgement Criteria: Creativity, originality, neatness and overall presentation",
          "Participants must bring their own paints and brushes",
          "A3 drawing sheets will be provided",
          "Only watercolor paint is allowed",
          "Participant’s name, class and school name must be written on the back of the sheet",
          "Cheating or malpractice will lead to disqualification",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Sahitya Sindhu (Creative Writing)",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Judgement Criteria: Creativity, vocabulary, adherence to topic or genre, content and coherence",
          "Participants may choose Essay Writing, Story Writing or Poetry Writing",
          "Word limits will be specified on the spot",
          "Language may be English, Hindi or Kannada",
          "Sheets will be provided",
          "Content must be original and unpublished; plagiarism will lead to disqualification",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Dance Competition (Classical / Semi-Classical)",
        rules: [
          "Solo dance time limit: 3 + 0.5 minutes; Group dance: 4 + 0.5 minutes",
          "Judgement Criteria include facial expression, choreography, stage presence, body language, costume and music; group dance will also be judged on synchronization",
          "Group size: 2–5 members from the same school",
          "Only Classical or Semi-Classical dance forms are allowed",
          "English or fusion songs are not permitted",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Greeting Card Making",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Theme: Indian heritage and traditions",
          "Judgement Criteria: Creativity, originality, artistic skill, neatness and overall presentation",
          "Cards must be handmade during the competition; ready-made cards are not allowed",
          "Participants must bring their own materials",
          "Name, class and school name must be written on the card",
          "Exceeding time limit will lead to deduction of marks",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
    ],
  },

  {
    title: "Category III (Classes 8–10)",
    competitions: [
      {
        name: "Dance Competition (Classical / Semi-Classical)",
        rules: [
          "Time limit: 5 + 1 minutes (Individual or Group)",
          "Judgement Criteria: Expressions, body language, choreography, costume and presentation",
          "Group size: 2–5 members from the same school",
          "Only Classical or Semi-Classical forms are allowed",
          "Performances must represent a particular culture",
          "Props may be used but must be set up and removed within one minute and must not be dangerous",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Bhavageethe / Ghazals (Light Music Singing)",
        rules: [
          "Time limit: 3 + 0.5 minutes (Individual Event)",
          "Judgement Criteria: Vocal expression, clarity, pitch, rhythm, tempo, pronunciation and overall presentation",
          "Songs must be in Kannada, Hindi or Sanskrit",
          "Only light music songs are allowed",
          "Karaoke tracks and musical instruments are prohibited except Tanpura if brought",
          "Use of electronic devices is strictly prohibited",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Poster Making Competition",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Theme: Celebrating 150 years of Vande Mataram – From Song to a Movement",
          "Judgement Criteria: Relevance to theme, creativity, originality, presentation, visual impact and message clarity",
          "Posters must be handmade on A3 sheets provided",
          "Use of electronic devices or ready-made posters is prohibited",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Mehendi Competition",
        rules: [
          "Time limit: 1 hour (Individual or Group)",
          "Judgement Criteria: Neatness, creativity, complexity and overall appeal",
          "Maximum team size: 2 members",
          "Design must cover one full palm including inner and outer sides",
          "Use of reference materials, phones or printed designs is prohibited",
          "Participants must complete designs within time",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
      {
        name: "Rangoli Competition",
        rules: [
          "Time limit: 1 hour (Individual Event)",
          "Judgement Criteria: Design, concept, presentation, color combination, neatness, creativity and artisanship",
          "Only eco-friendly materials such as rangoli colors, flowers, grains and leaves are allowed",
          "Use of diyas, stencils or gadgets is prohibited",
          "Rangoli must be created from scratch on the allocated space",
          "Judges’ decision will be final"
        ],
        registerLink: "https://forms.gle/uueyitVBySNLqpE56",
      },
    ],
  },
];


export default function Page() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {DATA.map((cat, idx) => (
        <Category
          key={idx}
          title={cat.title}
          competitions={cat.competitions}
          onSelect={setSelected}
        />
      ))}

      <Modal
        competition={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
