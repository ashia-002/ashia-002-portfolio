import vouchify1 from '../assets/vouchify1.png'
import vouchify2 from '../assets/vouchify2.png'
import vouchify3 from '../assets/vouchify3.png'
import ProjectShowcase from '../components/showcase'
import ProjectShowcase2 from '../components/showcase2'

export function Projects(params) {
  return (
    <div>
      <h2 className="flex justify-center text-md md:text-lg font-bold bg-black text-white pb-6">.../Projects ...</h2>
      <ProjectShowcase
        title="Kana Master"
        tags={["TypeScript", "ReactNative", "Redux Toolkit", "i18n", "iOS"]}
        description={[
          "Kana Master is an iOS application designed for learning Katakana and Hiragana. It includes various tests and practical exercises that help in learning and memorizing Japanese characters.",
          "The app also offers audio training for correct pronunciation and demonstrates how to properly draw each character."
        ]}
        images={{
          floating: vouchify1,
          mockups: [vouchify2, vouchify3],
        }}
        link="#"
      />
      <ProjectShowcase2
        title="Kana Master"
        tags={["TypeScript", "ReactNative", "Redux Toolkit", "i18n", "iOS"]}
        description={[
          "Kana Master is an iOS application designed for learning Katakana and Hiragana. It includes various tests and practical exercises that help in learning and memorizing Japanese characters.",
          "The app also offers audio training for correct pronunciation and demonstrates how to properly draw each character."
        ]}
        images={{
          floating: vouchify1,
          mockups: [vouchify1, vouchify2, vouchify3],
        }}
        link="#"
      />
      <ProjectShowcase
        title="Kana Master"
        tags={["TypeScript", "ReactNative", "Redux Toolkit", "i18n", "iOS"]}
        description={[
          "Kana Master is an iOS application designed for learning Katakana and Hiragana. It includes various tests and practical exercises that help in learning and memorizing Japanese characters.",
          "The app also offers audio training for correct pronunciation and demonstrates how to properly draw each character."
        ]}
        images={{
          floating: vouchify1,
          mockups: [vouchify2, vouchify3],
        }}
        link="#"
      />

    </div>
  )
}