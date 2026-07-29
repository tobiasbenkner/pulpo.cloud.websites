export type ReducedTranslations = Record<string, string>;

export function reduceTranslations(trans: any[], fieldName: string) {
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  };

  const translations = (trans ?? []).reduce(
    (acc: any, trans: any) => {
      const code = trans?.languages_id?.code;
      if (!code) return acc;

      const value = getNestedValue(trans, fieldName);

      // Doppelte Übersetzungszeilen pro Sprache dürfen einen bereits
      // gefüllten Wert nicht mit einem leeren überschreiben
      if (acc[code] && (value === null || value === undefined || value === "")) {
        return acc;
      }

      acc[code] = value ?? "";
      return acc;
    },
    {} as Record<string, string>,
  );

  return translations;
}
