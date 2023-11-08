import { createSignal } from "solid-js";

function App() {
    const [url, setURL] = createSignal<string>("https://ding-ai.vercel.app/");


    return (
        <>
            <div class="flex h-full w-full flex-col w-[100svw] h-[100svh]">
                    <div class="w-full flex justify-center py-2 bg-black/80">
                        <select name="" id="" onInput={(e) => {setURL(e.target.value)}} class="px-2 bg-black/90 text-white font-medium py-2 rounded-lg">   
                            <option selected value="https://ding-ai.vercel.app/">Ding AI</option>
                            <option value="https://hirelane.vercel.app/">Hirelane</option>
                            <option value="https://scroll-cards-iota.vercel.app/">Sticky Cards</option>
                            <option value="https://cubo-one.vercel.app/">Cubo</option>
                            <option value="https://safe-lading.vercel.app/">Safe Landing</option>
                            <option value="https://popshift-web.vercel.app/">Popshift Web</option>
                            <option value="https://sequence-scroll.vercel.app/">Sequence Scroll</option>
                        </select>
                    </div>
                <div class="h-full w-full">
                    <iframe src={url()} class="w-full h-full"></iframe>
                </div> 
            </div>
        </>
    );
}

export default App;
