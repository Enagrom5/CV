function Navbar() {
    return (  
<>
<ul className="flex flex-row justify-end gap-8 h-32" id="Home">
    <li className="w-32 h-16 text-center border-4 "><a href="#Home"/>Home</li>
    <li className="w-32 h-16 text-center border-4 "><a href="#about"/>About me</li>
    <li className="w-32 h-16 text-center border-4 "><a href="#skills"/>Skills</li>
    <li className="w-32 h-16 text-center border-4 "><a href="#exp"/>Experiences</li>
    <li className="w-32 h-16 text-center border-4 "><a href="#"/>Hobbies</li>
</ul>
</>
    )
}

export default Navbar;