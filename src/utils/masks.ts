export function maskPhone(str: string) {
  str?.replace(/[\d]/gi, "");

  if (str.includes("+55")) {
    const formatted = str.replace(
      /^(\d{3})(\d{2})(\d{1})(\d{4})(\d{4}).*/,
      "$1 ($2) $3 $4-$5"
    );
    return formatted;
  }
  const formatted = str.replace(
    /^(\d{2})(\d{1})(\d{4})(\d{4}).*/,
    "+55 ($1) $2 $3-$4"
  );

  return formatted;
}

export function maskOnlyDocument(str: string) {
  let char = str?.replace(/[-\./]/gi, "");

  if (char.length > 11) {
    const formatted = char.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      "$1.$2.$3/$4-$5"
    );
    return formatted;
  }
  const formatted = char.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
    "***$2.$3***"
  );
  return formatted;
}
