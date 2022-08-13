import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numberisotriangle">Number Iso Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/countvowels">Count Vowels</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/getlargest">Get Largest Input</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numbertriangle">Render a Numbers Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/isotriangle">Render a Isosiles Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/trianglerendered">Render a Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/numberwithin">Check Number with Range</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/multiplicationtable">Multiplication</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/sumofnatural">Sum of Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-primary">
          <Link to="/sumofdigits">Sum of All Digits</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-info">
          This is a warning list group item
        </li>
        <li class="list-group-item list-group-item-secondary">
          This is a info list group item
        </li>
        <li class="list-group-item list-group-item-light">
          This is a light list group item
        </li>
        <li class="list-group-item list-group-item-dark">
          This is a dark list group item
        </li>
      </ol>
    </div>
  );
}

export default Home;
