export interface BibleObject {
    '0': _0;
    '1': _0;
    '2': _2;
    date: string;
    photo: Photo;
  }
  
  interface Photo {
    id: string;
    title: string;
    author: string;
    url: string;
    previewUrl: string;
    creditUrl: string;
  }
  
  interface _2 {
    book: string;
    bookNumber?: any;
    chapter: number;
    startChapter: number;
    endChapter: number;
    verses: number[];
    startVerse: number;
    endVerse: number;
    text: string;
    textOriginal: string;
    version: Version;
    collection: number;
    collectionName: string;
    reference: string;
    referenceLong: string;
    readingUrl: string;
    readingData: ReadingData2;
    errors: any[];
  }
  
  interface ReadingData2 {
    bookNumber?: any;
    startChapter: number;
    endChapter: number;
    startVerse: number;
    endVerse: number;
    highlight: string;
  }
  
  interface _0 {
    book: string;
    bookNumber: number;
    chapter: number;
    startChapter: number;
    endChapter: number;
    verses: number[];
    startVerse: number;
    endVerse: number;
    text: string;
    textOriginal: string;
    version: Version;
    collection: number;
    collectionName: string;
    reference: string;
    referenceLong: string;
    readingUrl: string;
    readingData: ReadingData;
    errors: any[];
  }
  
  interface ReadingData {
    bookNumber: number;
    startChapter: number;
    endChapter: number;
    startVerse?: any;
    endVerse?: any;
    highlight: string;
  }
  
  interface Version {
    id: string;
    name: string;
    title: string;
    language: string;
    isQuran: boolean;
    isTanakh: boolean;
    isOldTestament: boolean;
    isNewTestament: boolean;
    details: Details;
  }
  
  interface Details {
    author: string;
    title: string;
    year: string;
    description: Description;
    languageCode: string;
    license: string;
    licenseUrl?: any;
  }
  
  interface Description {
    content: string;
    source: string;
    sourceUrl: string;
  }
export interface Wak{
    name: string;
    jesus: string;
}