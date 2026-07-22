export type MaskTypeContact = 'CELLPHONE' | 'LANDLINE' | 'EMAIL';
export type MaskTypeAddress = 'CEP' | 'UF';
export type MaskTypeDocument =
  'CPF' | 'CNPJ' | 'RG' | 'CNH' | 'PASSPORT' | 'CTPS' | 'ProfissionalID' | 'Military' | 'RNECRNM';
export type MaskTypeOthers = 'URL' | 'DIGITS' | 'ALPHANUMERIC' | 'TEXT' | 'DATE';

export type MaskTypes = MaskTypeAddress | MaskTypeContact | MaskTypeDocument | MaskTypeOthers;
