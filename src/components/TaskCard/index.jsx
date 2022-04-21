import { React, useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { FlagIcon } from "@heroicons/react/outline";

import { useSendFlagMutation } from "../../api/tasks";

export default function TaskCard(props) {
  const [isOpen, setIsOpen] = useState(0);
  const [newAnswer, setNewAnswer] = useState("");
  const [inputFlag, { isSuccess, isLoading }] = useSendFlagMutation();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  if (isLoading) {
    return <></>;
  }

  const handleFlag = async () => {
    if (newAnswer) {
      const boba = await inputFlag({
        id: props.id,
        flag: newAnswer,
      }).unwrap();
      setNewAnswer("");
      props.refetch();
      console.log(boba.isCorrect);
    }
  };

  return (
    <>
      {props.isSolved ? (
        <>
          <div
            className={`
				bg-${props.color}-50
				border-2 rounded border-${props.color}-300
				overflow-clip`}
          >
            <div
              className="
						px-4 py-2
						flex flex-row justify-between 
						font-semibold text-lg"
            >
              <div className="text-sky-500 text-xl">{props.title}</div>
              <div className="text-black ml-5">{props.points}</div>
            </div>
            <div
              className="
						flex flex-row justify-between
						px-4"
            >
              <div className="">
                <div className="flex flex-row">
                  <span className="text-red-500 font-bold text-xl">solved</span>
                </div>
              </div>

              <div
                className="
							flex flex-row items-center
		  					ml-5"
              >
                <span>
                  <CheckIcon className="h-5 w-5" strokeWidth={1} />
                </span>
                <span className="text-black font-normal text-xl">3</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`
				bg-${props.color}-50
				border-2 rounded border-${props.color}-300
				overflow-clip
				${isOpen ? "2xl:col-span-4 lg:col-span-3 md:col-span-2" : ""}
			`}
          >
            <div
              className={`${
                isOpen ? `border-b-2 border-${props.color}-300` : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className="
						px-4 py-2
						flex flex-row justify-between 
						font-semibold text-lg"
              >
                <div className="text-sky-500 text-xl">{props.title}</div>
                <div className="text-black ml-5">{props.points}</div>
              </div>

              <div
                className="
						flex flex-row justify-between
						px-4"
              >
                <div className="">
                  <div className="flex flex-row">
                    <span className="text-lime-500 font-bold text-xl">
                      {props.category}
                    </span>
                    {isOpen ? (
                      <div className="flex flex-row">
                        {props.tags.map((tag) => (
                          <div className="text-black font-semibold text-xl ml-5">
                            #{tag}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  className="
							flex flex-row items-center
		  					ml-5"
                >
                  <span>
                    <CheckIcon className="h-5 w-5" strokeWidth={1} />
                  </span>
                  <span className="text-black font-normal text-xl">3</span>
                </div>
              </div>
              {isOpen ? (
                <div
                  className="
							text-sky-500 font-medium
							py-2 px-4"
                >
                  by {props.author.name} ({props.author.contact})
                </div>
              ) : null}
            </div>
            {isOpen ? (
              <>
                <div className="px-4">
                  <p>{props.description}</p>
                  <div className="text-red-600 py-2 ">Прикрипленный файл</div>
                  <div className="py-3 flex flex-row justify-between">
                    <input
                      type="text"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      className={`px-2 appearance-none 
			              				w-full h-9 text-base rounded hover: bg-${props.color}-100`}
                      placeholder="CTF{...}"
                    />
                    <button
                      type="button"
                      onClick={handleFlag}
                      className={`bg-${props.color}-300 hover:bg-${props.color}-400 h-9 text-black ml-4 px-4 rounded font-medium border-1 border-${props.color}-300`}
                    >
                      Отправить
                    </button>
                  </div>
                </div>
                <div
                  className={`
							h-10 px-3
							flex justify-between items-center 
							font font-semibold 
							border-t-2 border-${props.color}-400`}
                >
                  <div className="flex flex-row items-center">
                    <FlagIcon className="w-4 h-4" strokeWidth={1} />
                    {/* <span className="pl-2">Simen228</span> */}
                  </div>
                  {/* <span>2 hours ago by GO_UKRAINE!</span> */}
                </div>
              </>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
