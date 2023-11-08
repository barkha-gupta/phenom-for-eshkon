"use client";
import Image from "next/image";
import { accordionData } from '@/data/data';
import {useState, useEffect} from 'react';
import { MdOutlineKeyboardArrowDown,MdKeyboardArrowRight } from "react-icons/md";
type ShowArrayItem = {
  id: number,
  show: boolean,
}

const Accordion = () => {
  const [showArray, setShowArray] = useState<ShowArrayItem[]>([]);
  const [showImgUrl, setShowImgUrl] = useState(accordionData[3].imgUrl);

    useEffect(() => {
        const initialShowArray = accordionData.map((dataItem) => ({
          id: dataItem.id,
          show: dataItem.show,
        }));
        setShowArray(initialShowArray);
      }, []);

  const accordionItemCollaspe = (accItemId: number) => (e: React.MouseEvent<Element, MouseEvent>) : void =>{
    const updatedShowArray = showArray.map((item) => ({
        id: item.id,
        show: item.id === accItemId ? true : false,
      }));
    
      // Update the state with the modified showArray
      setShowArray(updatedShowArray);

      const updatedImgId = showArray.find((item) => item.show === true)?.id;

// Check if updatedImgId is defined before trying to access the URL
const imgUrl = updatedImgId !== undefined ? accordionData[updatedImgId - 1]?.imgUrl : "";

setShowImgUrl(imgUrl);
      
  }
  return (
    <section className="acc_container">
      <div className="acc_container-heading">
        <p>Accelerate the process of connecting with best-fit candidates.</p>
      </div>

      <div className="acc_container-main">
        <div className="acc_container-main-left">
          {accordionData.map((item) => (
            <div
            key={item.id}
            className={`accordion-item ${ showArray[item.id-1]?.show ? "active" : "inactive"}`}
          >
            <div className="acc-item-row1" onClick={ accordionItemCollaspe(item.id)}>
              <h3>{item.heading}</h3>
      
              {!showArray[item.id-1]?.show && <MdOutlineKeyboardArrowDown size={30} />}
            </div>
            <div className="acc-item-row2">
              <p>
                {item.des}
              </p>
            </div>
            <div className="acc-item-row3">
              <span>Learn More</span>
              <span>
                <MdKeyboardArrowRight size={20} />
              </span>
            </div>
          </div>
          ))}
            
        </div>

        <div className="acc_container-main-right">
          <Image
            className="acc_container-main-right-img"
            src={showImgUrl}
            alt="screenshot"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
