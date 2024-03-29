'use client'

import React, { useState } from 'react'

type Props = {}

const ChatUI = (props: Props) => {

    const [chats, setChats] = useState([{
        sender: 'bot',
        message: 'Hi, how can I help you today?'
    },
    ])

    const [query, setQuery] = useState('');


    return (
        <div className='relative w-full'>
            <div
                style={{ boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
                className="sticky bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[600px]"
            >
                {/* Heading */}
                <div className="flex flex-col space-y-1.5 pb-6">
                    <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                    <p className="text-sm text-[#6b7280] leading-3">
                        Powered by MediBot AI 🌿🌿
                    </p>
                </div>
                {/* Chat Container */}
                <div
                    className="pr-4 h-[450px]"
                    style={{ minWidth: "100%", display: "table" }}
                >
                    {
                        chats?.map((chat, index) => {
                            return (
                                <div key={index} className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                        <div className="rounded-full bg-gray-100 border p-1">
                                            {
                                                chat.sender === 'bot' ? (
                                                    <svg
                                                        stroke="none"
                                                        fill="black"
                                                        strokeWidth="1.5"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        height={20}
                                                        width={20}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1
                                        .183.394a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                        ></path>
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        stroke="none"
                                                        fill="black"
                                                        strokeWidth={0}
                                                        viewBox="0 0 16 16"
                                                        height={20}
                                                        width={20}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </span>
                                    <p className="leading-relaxed">
                                        <span className="block font-bold text-gray-700">{chat.sender} </span>{chat.message}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Input box  */}
                <div className="flex items-center pt-0">
                    <form className="flex items-center justify-center w-full space-x-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                            placeholder="Type your message"
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                setChats((chats)=>[...chats,{sender:'user',message:query}])
                                setQuery('')
                                

                                // if no response recieved from bot swapnil bhai pls add this line:
                                setChats((chats)=>[...chats,{sender:'bot',message:'Sorry, I could not understand your query. Please try again.'}])
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ChatUI