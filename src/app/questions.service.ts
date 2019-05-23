import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  allQuestions: Question[] = [];

  constructor() {

    // tslint:disable:max-line-length

    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is the supreme law of the land?', 'the Constitution'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What does the Constitution do?', 'sets up the government\ndefines the government\nprotects basic rights of Americans'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'The idea of self - government is in the first three words of the Constitution.What are these words ?', 'We the People'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is an amendment?', 'a change (to the Constitution)\nan addition (to the Constitution)'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What do we call the first ten amendments to the Constitution?', 'the Bill of Rights'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is one right or freedom from the First Amendment?', 'speech\nreligion\nassembly\npress\npetition the government'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'How many amendments does the Constitution have?', 'twenty-seven (27)'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What did the Declaration of Independence do?', 'announced our independence (from Great Britain)\ndeclared our independence (from Great Britain)\nsaid that the United States is free (from Great Britain)'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What are two rights in the Declaration of Independence?', 'life\nliberty\npursuit of happiness'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is freedom of religion?', 'You can practice any religion, or not practice a religion.'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is the economic system in the United States?', 'capitalist economy\nmarket economy'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Democracy', 'What is the “rule of law”?', 'Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law.'));

    this.allQuestions.push(new Question('American Government', 'System of Government', 'Name one branch or part of the government.', 'congress\nlegislative\nPresident\nexecutive\nthe courts\njudicial'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What stops one branch of government from becoming too powerful?', 'checks and balances\nseparation of powers'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who is in charge of the executive branch?', 'the President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who makes federal laws?', 'Congress\nSenate and House (of Representatives)\n(U.S. or national) legislature'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What are the two parts of the U.S. Congress?', 'the Senate and House (of Representatives)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'How many U.S. Senators are there?', 'one hundred (100)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'We elect a U.S. Senator for how many years?', 'six (6)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who is one of your state’s U.S. Senators now?', 'Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C.\n(or the territory where the applicant lives) has no U.S. Senators.]'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'The House of Representatives has how many voting members?', 'four hundred thirty-five (435)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'We elect a U.S. Representative for how many years?', 'two (2)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Name your U.S. Representative.', 'Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]\n1st district - Tom O\'Halleran (D) (since 2017)\n2nd district - Ann Kirkpatrick (D) (since 2019)\n3rd district - Raúl Grijalva (D) (since 2003)\n4th district - Paul Gosar (R) (since 2011)\n5th district - Andy Biggs (R) (since 2017)\n6th district - David Schweikert (R) (since 2011)\n7th district - Ruben Gallego (D) (since 2015)\n8th district - Debbie Lesko (R) (since 2018)\n9th district - Greg Stanton (D) (since 2019)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who does a U.S. Senator represent?', 'all people of the state'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Why do some states have more Representatives than other states ?', '(because of) the state’s population\n(because) they have more people\n(because) some states have more people'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'We elect a President for how many years?', 'four (4)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'In what month do we vote for President?', 'November'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the name of the President of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.\nDonald Trump'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the name of the Vice President of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.\nMike Pence'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'If the President can no longer serve, who becomes President?', 'the Vice President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'If both the President and the Vice President can no longer serve, who becomes President?', 'the Speaker of the House'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who is the Commander in Chief of the military?', 'the President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who signs bills to become laws?', 'the President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who vetoes bills?', 'the President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What does the President’s Cabinet do?', 'advises the President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What are two Cabinet-level positions?', 'Secretary of Agriculture\nSecretary of Commerce\nSecretary of Defense\nSecretary of Education\nSecretary of Energy\nSecretary of Health and Human Services\nSecretary of Homeland Security\nSecretary of Housing and Urban Development\nSecretary of the Interior\nSecretary of Labor\nSecretary of State\nSecretary of Transportation\nSecretary of the Treasury\nSecretary of Veterans Affairs\nAttorney General\nVice President'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What does the judicial branch do?', 'reviews laws\nexplains laws\nresolves disputes (disagreements)\ndecides if a law goes against the Constitution'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the highest court in the United States?', 'the Supreme Court'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'How many justices are on the Supreme Court?', 'Visit uscis.gov/citizenship/testupdates for the number of justices on the Supreme Court.\nNine (9)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who is the Chief Justice of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.\nJohn Roberts '));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?', 'to print money\nto declare war\nto create an army\nto make treaties'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'Under our Constitution, some powers belong to the states. What is one power of the states?', 'provide schooling and education\nprovide protection (police)\nprovide safety (fire departments)\ngive a driver’s license\napprove zoning and land use'));


    this.allQuestions.push(new Question('American Government', 'System of Government', 'Who is the Governor of your state now?', 'Answers will vary. [District of Columbia residents should answer that D.C. does not have a Governor.]\nDoug Doucey.'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the capital of your state?', 'Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What are the two major political parties in the United States?', 'Democratic and Republican'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the political party of the President now?', 'Visit uscis.gov/citizenship/testupdates for the political party of the President.\nRepublican'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 'What is the name of the Speaker of the House of Representatives now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.\nNancy Pelosi'));


    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'There are four amendments to the Constitution about who can vote. Describe one of them.', 'Citizens eighteen (18) and older (can vote).\nYou don’t have to pay (a poll tax) to vote.\nAny citizen can vote. (Women and men can vote.)\nA male citizen of any race (can vote).'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'What is one responsibility that is only for United States citizens?', 'serve on a jury\nvote in a federal election'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'Name one right only for United States citizens.', 'vote in a federal election\nrun for federal office'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'What are two rights of everyone living in the United States?', 'freedom of expression\nfreedom of speech\nfreedom of assembly\nfreedom to petition the government\nfreedom of religion\nthe right to bear arms'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'What do we show loyalty to when we say the Pledge of Allegiance?', 'the United States\nthe flag'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'What is one promise you make when you become a United States citizen?', 'give up loyalty to other countries\ndefend the Constitution and laws of the United States\nobey the laws of the United States\nserve in the U.S. military (if needed)\nserve (do important work for) the nation (if needed)\nbe loyal to the United States'));

    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'How old do citizens have to be to vote for President?', 'eighteen (18) and older'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'What are two ways that Americans can participate in their democracy?', 'vote\njoin a political party\nhelp with a campaign\njoin a civic group\njoin a community group\ngive an elected official your opinion on an issue\ncall Senators and Representatives\npublicly support or oppose an issue or policy\nrun for office\nwrite to a newspaper'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'When is the last day you can send in federal income tax forms?', 'April 15'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 'When must all men register for the Selective Service?', 'at age eighteen (18)\nbetween eighteen (18) and twenty-six (26)'));

    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'What is one reason colonists came to America?', 'freedom\npolitical liberty\nreligious freedom\neconomic opportunity\npractice their religion\nescape persecution'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'Who lived in America before the Europeans arrived?', 'American Indians\nNative Americans'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'What group of people was taken to America and sold as slaves?', 'Africans\npeople from Africa'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'Why did the colonists fight the British?', 'because of high taxes (taxation without representation)\nbecause the British army stayed in their houses (boarding, quartering)\nbecause they didn’t have self-government'));

    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'Who wrote the Declaration of Independence?', '(Thomas) Jefferson'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'When was the Declaration of Independence adopted?', 'July 4, 1776'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'There were 13 original states. Name three.', 'New Hampshire\nMassachusetts\nRhode Island\nConnecticut\nNew York\nNew Jersey\nPennsylvania\nDelaware\nMaryland\nVirginia\nNorth Carolina\nSouth Carolina\nGeorgia'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'What happened at the Constitutional Convention?', 'The Constitution was written.\nThe Founding Fathers wrote the Constitution.'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'When was the Constitution written?', '1787'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.', '(James) Madison\n(Alexander) Hamilton\n(John) Jay\nPublius'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'What is one thing Benjamin Franklin is famous for?', 'U.S. diplomat\noldest member of the Constitutional Convention\nfirst Postmaster General of the United States\nwriter of “Poor Richard’s Almanac”\nstarted the first free libraries'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'Who is the “Father of Our Country”?', '(George) Washington'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 'Who was the first President?', '(George) Washington'));

    this.allQuestions.push(new Question('American History', '1800s','What territory did the United States buy from France in 1803?','the Louisiana Territory\nLouisiana'));
    this.allQuestions.push(new Question('American History', '1800s','Name one war fought by the United States in the 1800s.','War of 1812\nMexican-American War\nCivil War\nSpanish-American War'));
    this.allQuestions.push(new Question('American History', '1800s','Name the U.S. war between the North and the South.','the Civil War\nthe War between the States'));
    this.allQuestions.push(new Question('American History', '1800s','Name one problem that led to the Civil War.','slavery\neconomic reasons\nstates’ rights'));
    this.allQuestions.push(new Question('American History', '1800s','What was one important thing that Abraham Lincoln did?','freed the slaves (Emancipation Proclamation)\nsaved (or preserved) the Union\nled the United States during the Civil War'));
    this.allQuestions.push(new Question('American History', '1800s','What did the Emancipation Proclamation do?','freed the slaves\nfreed slaves in the Confederacy\nfreed slaves in the Confederate states\nfreed slaves in most Southern states'));
    this.allQuestions.push(new Question('American History', '1800s','What did Susan B. Anthony do?','fought for women’s rights\nfought for civil rights'));

    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Name one war fought by the United States in the 1900s.','World War I\nWorld War II\nKorean War\nVietnam War\n(Persian) Gulf War'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Who was President during World War I?','(Woodrow) Wilson'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Who was President during the Great Depression and World War II?', '(Franklin) Roosevelt'));

    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Who did the United States fight in World War II?', 'Japan, Germany, and Italy'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Before he was President, Eisenhower was a general. What war was he in?', 'World War II'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'During the Cold War, what was the main concern of the United States?', 'Communism'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'What movement tried to end racial discrimination?', 'civil rights (movement)'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'What did Martin Luther King, Jr. do?', 'fought for civil rights\nworked for equality for all Americans'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'What major event happened on September 11, 2001, in the United States?', 'Terrorists attacked the United States.'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 'Name one American Indian tribe in the United States.', '[USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]\nCherokee\nNavajo\nSioux\nChippewa\nChoctaw\nPueblo\nApache\nIroquois\nCreek\nBlackfeet\nSeminole\nCheyenne\nArawak\nShawnee\nMohegan\nHuron\nOneida\nLakota\nCrow\nTeton\nHopi\nInuit'));

    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'Name one of the two longest rivers in the United States.', 'Missouri (River)\nMississippi (River)'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'What ocean is on the West Coast of the United States?', 'Pacific (Ocean)'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'What ocean is on the East Coast of the United States?', 'Atlantic (Ocean)'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'Name one U.S. territory.', 'Puerto Rico\nU.S. Virgin Islands\nAmerican Samoa\nNorthern Mariana Islands\nGuam'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'Name one state that borders Canada.', 'Maine\nNew Hampshire\nVermont\nNew York\nPennsylvania\nOhio\nMichigan\nMinnesota\nNorth Dakota\nMontana\nIdaho\nWashington\nAlaska'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'Name one state that borders Mexico.', 'California\nArizona\nNew Mexico\nTexas'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'What is the capital of the United States?', 'Washington, D.C.'));
    this.allQuestions.push(new Question('Integrated Civics', 'Geography', 'Where is the Statue of Liberty?', 'New York (Harbor)\nLiberty Island[Also acceptable are New Jersey, near New York City, and on the Hudson (River).]'));

    this.allQuestions.push(new Question('Integrated Civics', 'Symbols', 'Why does the flag have 13 stripes?', 'because there were 13 original colonies\nbecause the stripes represent the original colonies'));
    this.allQuestions.push(new Question('Integrated Civics', 'Symbols', 'Why does the flag have 50 stars?', 'because there is one star for each state\nbecause each star represents a state\nbecause there are 50 states'));
    this.allQuestions.push(new Question('Integrated Civics', 'Symbols', 'What is the name of the national anthem?', 'The Star-Spangled Banner'));

    this.allQuestions.push(new Question('Integrated Civics', 'Holidays', 'When do we celebrate Independence Day?', 'July 4'));
    this.allQuestions.push(new Question('Integrated Civics', 'Holidays', 'Name two national U.S. holidays.', 'New Year’s Day\nMartin Luther King, Jr. Day\nPresidents’ Day\nMemorial Day\nIndependence Day\nLabor Day\nColumbus Day\nVeterans Day\nThanksgiving\nChristmas'));

  }

  getAllQuestions(): Question[] {
    return this.allQuestions;
  }

  getNextQuestion(alreadyAsked: Question[]): Question {
    let result: Question;
    let maxAttempts = 50;
    while (maxAttempts-- > 0) {
      const randomIndex: number = Math.floor(Math.random() * this.allQuestions.length);
      result = this.allQuestions[randomIndex];
      if (!alreadyAsked.includes(result)) {
        break;
      }
    }
    return result;
  }

}
