import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/trianglerendered">01 Render a Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">02 Strings</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numbertriangle">03 Render a Numbers Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/multiplicationtable">04 Multiplication Table</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/sumofnatural">05 Sum of Natural Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/sumofdigits">06 Sum of All Digits in a String</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numberwithin">07 Check Number with Range 100 to 500</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">08 Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/isotriangle">09 Render a Isosiles Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numberisotriangle">10 Number Iso Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/countvowels">11 Count Vowels</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/getlargest">12 Get Largest Input</Link>
        </li>

        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">13 Prime Numbers</Link>
        </li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/namegenerator">14 Generate Random Name</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
