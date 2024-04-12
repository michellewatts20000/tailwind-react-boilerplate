import { useState, CSSProperties } from 'react'
import { BrandBlock } from './BrandBlock'
import { AccordionItem } from './AccordionItem'
import { InfoBlock } from './InfoBlock'

const SectionTwo: React.FC = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    '1': true,
    '2': true,
  })

  const handleClick = (accordionNum?: string) => {
    setSelectedAccordion(accordionNum ?? null)
  }

  const handleInfoBlockClose = (accordionNum: string) => {
    setIsOpen((prevState) => ({ ...prevState, [accordionNum]: false }))
  }

  const accordionItemWidth: number = 20

  return (
    <section className="section-two h-screen bg-purple-400 w-full">
      <div className="block-wrapper flex relative h-full w-full">
        <BrandBlock className="absolute top-0 left-0 w-1/4" />
        <div className="flex w-3/4 ml-auto overflow-x-scroll overflow-y-hidden">
          <AccordionItem
            accordionNumber="1"
            className="bg-red-400 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
          <InfoBlock
            className={`transition-all duration-2000 ease-in-out transform flex-shrink-0 flex-grow-0 ${
              selectedAccordion === '1' && isOpen['1']
                ? `opacity-100 translate-x-0`
                : 'opacity-0 -translate-x-2 max-w-0'
            }`}
            style={
              {
                '--accordion-width': `${accordionItemWidth}vw`,
                // tweak this number to whatever the designers end up going with
                width:
                  selectedAccordion === '1' && isOpen['1']
                    ? `calc(var(--accordion-width) * 2)`
                    : '0',
              } as CSSProperties
            }>
            <button
              className="absolute top-[1rem] right-[1rem]"
              onClick={() => handleInfoBlockClose('1')}>
              close event modal
            </button>
          </InfoBlock>

          <AccordionItem
            accordionNumber="2"
            className="bg-green-400 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
          <InfoBlock
            className={`transition-all duration-2000 ease-in-out transform flex-shrink-0 flex-grow-0 ${
              selectedAccordion === '2' && isOpen['2']
                ? `opacity-100 translate-x-0`
                : 'opacity-0 -translate-x-2 max-w-0'
            }`}
            style={
              {
                '--accordion-width': `${accordionItemWidth}vw`,
                width:
                  selectedAccordion === '2' && isOpen['2']
                    ? `calc(var(--accordion-width) * 2)`
                    : '0',
              } as CSSProperties
            }>
            <button
              className="absolute top-[1rem] right-[1rem]"
              onClick={() => handleInfoBlockClose('2')}>
              close event modal
            </button>
          </InfoBlock>

          <AccordionItem
            accordionNumber="3"
            className="bg-blue-400 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
          <AccordionItem
            accordionNumber="4"
            className="bg-yellow-400 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
          <AccordionItem
            accordionNumber="5"
            className="bg-red-500 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
          <AccordionItem
            accordionNumber="6"
            className="bg-pink-800 flex-none w-1/4 flex-shrink-0 flex-grow-0"
            handleClick={handleClick}
            accordionItemWidth={accordionItemWidth}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
