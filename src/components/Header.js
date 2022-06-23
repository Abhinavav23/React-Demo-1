import Heading from './Heading';
import Searchbar from './Serchbar';

export default function Header(){
    return (
    <header>
        <Heading/>
        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
            <Searchbar/>
        </nav>
    </header>
    )
}


// jsx ---> javascript and XML
