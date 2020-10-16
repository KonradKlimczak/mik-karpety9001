import React, { FC, useEffect, useRef, useState } from "react";

export const A: FC = () => {
  const [counter, setCounter] = useState(0);
  const container = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleResize = () => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
  };

  window.addEventListener("resize", handleResize);

  useEffect(handleResize, []);

  return (
    <div ref={container}>
      {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
    </div>
  );
};

interface IPerson {
  id: string;
  name: string;
  age: number;
}

function sortPerson(personA: IPerson, personB: IPerson): 1 | -1 | 0 {
  if (personA.age > personB.age) {
    return 1;
  } else if (personA.age < personB.age) {
    return -1;
  }
  return 0;
}

interface IBProps {
  initialPeople: IPerson[];
}

export const B: FC<IBProps> = (props) => {
  const [sortedPeople, setSortedPeople] = useState(
    props.initialPeople.sort(sortPerson)
  );

  useEffect(() => {
    setSortedPeople(props.initialPeople.sort(sortPerson));
  }, [props.initialPeople]);

  return (
    <div>
      {sortedPeople.map((person) => (
        <div>
          {person.name} ({person.age})
        </div>
      ))}
    </div>
  );
};

interface IAnimal {
  id: string;
  name: string;
  height: number;
  width: number;
}

function sortByHeight(personA: IAnimal, personB: IAnimal): 1 | -1 | 0 {
  if (personA.height > personB.height) {
    return 1;
  } else if (personA.height < personB.height) {
    return -1;
  }
  return 0;
}

function sortByWidth(personA: IAnimal, personB: IAnimal): 1 | -1 | 0 {
  if (personA.width > personB.width) {
    return 1;
  } else if (personA.width < personB.width) {
    return -1;
  }
  return 0;
}

enum SortBy {
  Width = "WIDTH",
  Height = "HEIGHT",
}

interface ICProps {
  animals: IAnimal[];
}

export const C: FC<ICProps> = (props) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Height);
  const [sortedAnimals, setSortedAnimals] = useState(
    props.animals.sort(sortByHeight)
  );

  const handleSortByHeight = () => {
    setSortBy(SortBy.Height);
    setSortedAnimals(props.animals.sort(sortByHeight));
  };

  const handleSortByWidth = () => {
    setSortBy(SortBy.Width);
    setSortedAnimals(props.animals.sort(sortByWidth));
  };

  useEffect(() => {
    setSortedAnimals(props.animals.sort(sortByHeight));
  }, [props.animals]);

  return (
    <div>
      <div
        onClick={handleSortByHeight}
        style={{ background: SortBy.Height === sortBy ? "blue" : undefined }}
      >
        Sort by Height
      </div>
      <div
        onClick={handleSortByWidth}
        style={{ background: SortBy.Width === sortBy ? "blue" : undefined }}
      >
        Sort by Width
      </div>
      {sortedAnimals.map((animal) => (
        <div>
          {animal.name} ({animal.height}) ({animal.width})
        </div>
      ))}
    </div>
  );
};
