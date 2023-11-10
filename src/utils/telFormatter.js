export const telFormatter = (tel) => {
  tel = tel.replace(/[^0-9]/g, "");
  return tel.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    "$1-$2-$3"
  );
};
