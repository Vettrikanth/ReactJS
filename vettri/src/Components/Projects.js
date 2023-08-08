import bg from "./image/bg.jpg"

const Projects = () => {
    return (
        <div>
            <img src={bg} class="bg"></img>
            <h1>My projects</h1>
            <p>Elephant Emotion Classification</p>
            <p>
                Due to urbanization and increased human activity near forests, human animal interactions are becoming more and more common. Animals like elephants that are unpredictable incur a lot of damage to both life and property.
                Especially, when elephants go rogue.There are various reasons for why the elephants get into the areas. There are a lot of ways to detect elephants and there are various flaws in them. There are also stealth predators like jaguars that enter
                into villages and cause damage to both humans and cattle.The elephants that are in trouble inside the forests get timely help only when reported.
                <p>In 2019-20, 585 deaths due to elephant attack happened, whereas in between 2020-21, almost 461 such casualties were reported and in the last year, the cases gained a marginal hike with almost 535 being reported by several state governments, according to the data provided by the ministry.

                    Among human casualties of conflict with animals, elephants killed 1,579 humans in three years — 585 in 2019-20, 461 in 2020-21, and 533 in 2021-22. Odisha accounted for the highest number of these deaths at 322, followed by Jharkhand at 291 (including 133 in 2021-22 alone), West Bengal at 240, Assam at 229, Chhattisgarh at 183, and Tamil Nadu at 152.
                </p>
            </p>
            <ul className="resume">
                <p>Exisiting solution</p>
                <li>Object detection Techniques</li>
                <li>Beehive Fences</li>
                <li>
                    Thorn bush barriers</li>
                <li>
                    Deep trenches</li>
                <li>
                    Electric Fences
                </li>
                <li>

                    Aversive Jio fencing devices</li>
            </ul>

            <ul className="resume">
<li>The cameras placed in the trees cannot detect the presence of elephants out of its range.
</li>
<li>
The usage of honey bees as a preventive measure might cause the elephants to run towards the village. </li>
            <li>
The voice based detection systems in the existing solution cannot classify the emotion of elephants like if its rogue or mad, asks for help, or in danger etc.</li>
            <li>One of the major downsides of modern beekeeping is the transmission of disease and parasites.</li>
            <li> Migratory beekeepers move their hives across the country for pollination and this practice has the potential to spread disease and pests not just among honey bee colonies, but to wild bees as well. 
The shortage of bees in some cases has increased the distance some beekeepers must move their hives to help farmers pollinate their crops and this compounds the problem
The Electric fences are illegal.</li>
            
            </ul>


            {/* <p>Automated helmet detection</p> */}
        </div>
    )
}
export default Projects;