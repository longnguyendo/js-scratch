t = Number(readline());
while (t > 0) {
  readline();
  array = readline()
    .split(" ")
    .map((x) => Number(x));
  index =
    array.findIndex(
      (x) =>
        x !=
        (array[0] === array[1]
          ? array[0]
          : array[0] === array[2]
          ? array[0]
          : array[1])
    ) + 1;
  print(index);
  t -= 1;
}
