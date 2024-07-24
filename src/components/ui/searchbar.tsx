import { SearchButton } from "./searchbutton";
import { DatePicker } from "./datepicker";
import { City } from "./city";

export function SearchBar() {
    return (
    <div className="flex flex-row items-center justify-center space-x-5">
        <City />
        <DatePicker />
        <SearchButton />
    </div>

    );
}