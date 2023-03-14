import React from "react";
import { DarkThemeToggle, Flowbite, figcaption } from 'flowbite-react';

export default function Instructioncomponent() {
    return (
        <>
            <div>
                <p class="text-3xl">Follow the Instruction </p>
            </div>
            <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">STEP1</h3>
                        <p class="my-4 font-light">"Scan the unique id present on the cart"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src="./Images/qr-code-scanning-vector-illustration-600w-1303670605.webp" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">STEP2</h3>
                        <p class="my-4 font-light">"Enter the password the your phone number "</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Step4</h3>
                        <p class="my-4 font-light">"Start shopping the item and make sure that the items are proberly updated by the cart"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">STEP4</h3>
                        <p class="my-4 font-light">"Exit the cart by clicking on done botton on the page ."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
            </div>


        </>

    )
}