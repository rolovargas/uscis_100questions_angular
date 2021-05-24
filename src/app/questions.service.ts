import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  allQuestions: Question[] = [];

  constructor() {

    // tslint:disable:max-line-length

    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 1, 'What is the form of government of the United States?', 'Republic\nConstitution-based federal republic\nRepresentative democracy'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 2, 'What is the supreme law of the land?', '(U.S.) Constitution'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 3, 'Name one thing the U.S. Constitution does', 'Forms the government\nDefines powers of government\nDefines the parts of government\nProtects the rights of the people'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 4, 'The U.S. Constitution starts with the words "We the People." What does "We the People" mean?', 'Self-government\nPopular sovereignty\nConsent of the governed\nPeople should govern themselves\n(Example of) social contract'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 5, 'How are changes made to the U.S. Constitution?', 'Amendments\nThe amendment process'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 6, 'What does the Bill of Rights protect?', '(The basic) rights of Americans\n(The basic) rights of people living in the United States'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 7, 'How many amendments does the U.S. Constitution have?', 'Twenty-seven (27)'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 8, 'Why is the Declaration of Independence important?', 'It says America is free from British control.\nIt says all people are created equal.\nIt identifies inherent rights.\nIt identifies individual freedoms.'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 9, 'What founding document said the American colonies were free from Britain?', 'Declaration of Independence'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 10, 'Name two important ideas from the Declaration of Independence and the U.S. Constitution.', 'Equality\nLiberty\nSocial contract\nNatural rights\nLimited government\nSelf-government'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 11, 'The words "Life, Liberty, and the pursuit of Happiness" are in what founding document?', 'Declaration of Independence'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 12, 'What is the economic system of the United States?', 'Capitalism\nFree market economy'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 13, 'What is the rule of law?', 'Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law.'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 14, 'Many documents influenced the U.S. Constitution. Name one.', 'Declaration of Independence\nArticles of Confederation\nFederalist Papers\nAnti-Federalist Papers\nVirginia Declaration of Rights\nFundamental Orders of Connecticut\nMayflower Compact\nIroquois Great Law of Peace'));
    this.allQuestions.push(new Question('American Government', 'Principles of American Government', 15, 'There are three branches of government. Why?', 'So one part does not become too powerful\nChecks and balances\nSeparation of powers'));

    this.allQuestions.push(new Question('American Government', 'System of Government', 16, 'Name the three branches of government.', 'Legislative, executive, and judicial\nCongress, president, and the courts'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 17, 'The President of the United States is in charge of which branch of government?', 'Executive branch'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 18, 'What part of the federal government writes laws?', '(U.S.) Congress\n(U.S. or national) legislature\nLegislative branch'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 19, 'What are the two parts of the U.S. Congress?', 'Senate and House (of Representatives)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 20, 'Name one power of the U.S. Congress', 'Writes laws\nDeclares war\nMakes the federal budget'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 21, 'How many U.S. senators are there?', 'One hundred (100)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 22, 'How long is a term for a U.S. senator?', 'Six (6) years'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 23, 'Who is one of your state’s U.S. senators now?', 'Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. senators)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 24, 'How many voting members are in the House of Representatives?', 'Four hundred thirty-five (435)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 25, 'How long is a term for a member of the House of Representatives?', 'Two (2) years'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 26, 'Why do U.S. representatives serve shorter terms than U.S. senators?', 'To more closely follow public opinion'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 27, 'How many senators does each state have?', 'Two (2)Equal representation (for small states)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 28, 'Why does each state have two senators?', 'The Great Compromise (Connecticut Compromise)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 29, 'Name your U.S. representative.', 'Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) representatives in Congress.]'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 30, 'What is the name of the Speaker of the House of Representatives now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 31, 'Who does a U.S. senator represent?', 'Citizens of their state\nPeople of their state'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 32, 'Who elects U.S. senators?', 'Citizens from their state'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 33, 'Who does a member of the House of Representatives represent?', 'Citizens in their (congressional) district\nCitizens in their district\nPeople from their (congressional) district\nPeople in their district'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 34, 'Who elects members of the House of Representatives? ', 'Citizens from their (congressional) district'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 35, 'Some states have more representatives than other states. Why?', '(Because of) the state’s population\n(Because) they have more people\n(Because) some states have more people'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 36, 'The President of the United States is elected for how many years?', 'Four (4) years'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 37, 'The President of the United States can serve only two terms. Why?', '(Because of) the 22nd Amendment\nTo keep the president from becoming too powerful'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 38, 'What is the name of the President of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.\nJoe Biden'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 39, 'What is the name of the Vice President of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.\nKamala Harris'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 40, 'If the president can no longer serve, who becomes president?', 'The Vice President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 41, 'Name one power of the president', 'Signs bills into law\nVetoes bills\nEnforces laws\nCommander in Chief(of the military) \nChief diplomat'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 42, 'Who is Commander in Chief of the U.S. military?', 'The President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 43, 'Who signs bills to become laws?', 'The President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 44, 'Who vetoes bills?', 'The President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 45, 'Who appoints federal judges? ', 'The President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 46, 'The executive branch has many parts. Name one.', 'President (of the United States)\nCabinet\nFederal departments and agencies'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 47, 'What does the President’s Cabinet do?', 'Advises the President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 48, 'What are two Cabinet-level positions?', 'Attorney General\nSecretary of Agriculture\nSecretary of Commerce\nSecretary of Defense\nSecretary of Education\nSecretary of Energy\nSecretary of Health and Human Services\nSecretary of Homeland Security\nSecretary of Housing and Urban Development\nSecretary of the Interior\nSecretary of Labor\nSecretary of State \nSecretary of Transportation\nSecretary of the Treasury\nSecretary of Veterans Affairs\nVice President (of the United States)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 49, 'Why is the Electoral College important?', 'It decides who is elected president.\nIt provides a compromise between the popular election of the president and congressional selection.'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 50, 'What is one part of the judicial branch?', 'Supreme Court\nFederal Courts'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 51, 'What does the judicial branch do? ', 'Reviews laws\nExplains laws\nResolves disputes (disagreements) about the law\nDecides if a law goes against the (U.S.) Constitution'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 52, 'What is the highest court in the United States?', 'Supreme Court'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 53, 'How many seats are on the Supreme Court?', 'Nine (9)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 54, 'How many Supreme Court justices are usually needed to decide a case?', 'Five (5)'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 55, 'How long do Supreme Court justices serve?', '(For) life\nLifetime appointment\n(Until) retirement'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 56, 'Supreme Court justices serve for life. Why?', 'To be independent (of politics)\nTo limit outside (political) influence'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 57, 'Who is the Chief Justice of the United States now?', 'Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 58, 'Name one power that is only for the federal government.', 'Print paper money\nMint coins\nDeclare war\nCreate an army\nMake treaties\nSet foreign policy'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 59, 'Name one power that is only for the states.', 'Provide schooling and education\nProvide protection (police)\nProvide safety (fire departments)\nGive a driver’s license\nApprove zoning and land use'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 60, 'What is the purpose of the 10th Amendment?', '(It states that the) powers not given to the federal government belong to the states or to the people.'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 61, 'Who is the governor of your state now?', 'Answers will vary. [District of Columbia residents should answer that D.C. does not have a governor.]'));
    this.allQuestions.push(new Question('American Government', 'System of Government', 62, 'What is the capital of your state?', 'Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]\nArizona: Phoenix'));

    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 63, 'There are four amendments to the U.S. Constitution about who can vote. Describe one of them', 'Citizens eighteen (18) and older (can vote)\nYou don\'t have to pay (a poll tax) to vote\nAny citizen can vote. (Women and men can vote.)\nA male citizen of any race (can vote)'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 64, 'Who can vote in federal elections, run for federal office, and serve on a jury in the United States?', 'Citizens\nCitizens of the United States\nU.S. citizens'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 65, 'What are three rights of everyone living in the United States?', 'Freedom of expression\nFreedom of speech\nFreedom of assembly\nFreedom to petition the government\nFreedom of religion\nThe right to bear arms'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 66, 'What do we show loyalty to when we say the Pledge of Allegiance?', 'The United States\nThe flag'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 67, 'Name two promises that new citizens make in the Oath of Allegiance', 'Give up loyalty to other countries\nDefend the (U.S.) Constitution\nObey the laws of the United States\nServe in the military (if needed)\nServe (help, do important work for) the nation (if needed)\nBe loyal to the United States'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 68, 'How can people become United States citizens?', 'Naturalize\nDerive citizenship\nBe born in the United States'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 69, 'What are two examples of civic participation in the United States?', 'Vote\nRun for office\nJoin a political party\nHelp with a campaign\nJoin a civic group\nJoin a community group\nGive an elected official your opinion (on an issue)\nContact elected officials\nSupport or oppose an issue or policy\nWrite to a newspaper'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 70, 'What is one way Americans can serve their country?', 'Vote\nPay taxes\nObey the law\nServe in the military\nRun for office\nWork for local, state, or federal government'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 71, 'Why is it important to pay federal taxes?', 'Required by law\nAll people pay to fund the federal government\nRequired by the (U.S.) Constitution (16th Amendment)\nCivic duty'));
    this.allQuestions.push(new Question('American Government', 'Rights and Responsibilities', 72, 'It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why', 'Required by law\nCivic duty\nMakes the draft fair, if needed'));

    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 73, 'The colonists came to America for many reasons. Name one', 'Freedom\nPolitical liberty\nReligious freedom\nEconomic opportunity\nEscape persecution'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 74, 'Who lived in America before the Europeans arrived?', 'American Indians\nNative Americans'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 75, 'What group of people was taken and sold as slaves?', 'Africans\nPeople from Africa'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 76, 'What war did the Americans fight to win independence from Britain?', 'American Revolution\nThe (American) Revolutionary War\nWar for (American) Independence'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 77, 'Name one reason why the Americans declared independence from Britain', 'High taxes\nTaxation without representation\nBritish soldiers stayed in Americans’ houses (boarding, quartering)\nThey did not have self-government\nBoston Massacre\nBoston Tea Party (Tea Act)\nStamp Act\nSugar Act\nTownshend Acts\nIntolerable (Coercive) Acts'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 78, 'Who wrote the Declaration of Independence?', '(Thomas) Jefferson'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 79, 'When was the Declaration of Independence adopted?', 'July 4, 1776'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 80, 'The American Revolution had many important events. Name one', '(Battle of) Bunker Hill\nDeclaration of Independence\nWashington Crossing the Delaware (Battle of Trenton)\n(Battle of) Saratoga\nValley Forge (Encampment)\n(Battle of) Yorktown (British surrender at Yorktown)'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 81, 'There were 13 original states. Name five', 'New Hampshire\nMassachusetts\nRhode Island\nConnecticut\nNew York\nNew Jersey\nPennsylvania\nDelaware\nMaryland\nVirginia\nNorth Carolina\nSouth Carolina\nGeorgia'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 82, 'What founding document was written in 1787?', '(U.S.) Constitution'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 83, 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers', '(James) Madison\n(Alexander) Hamilton\n(John) Jay\nPublius'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 84, 'Why were the Federalist Papers important?', 'They helped people understand the (U.S.) Constitution\nThey supported passing the (U.S.) Constitution'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 85, 'Benjamin Franklin is famous for many things. Name one', 'Founded the first free public libraries\nFirst Postmaster General of the United States\nHelped write the Declaration of Independence\nInventor\nU.S. diplomat'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 86, 'George Washington is famous for many things. Name one.', '"Father of Our Country"\nFirst president of the United States\nGeneral of the Continental Army\nPresident of the Constitutional Convention'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 87, 'Thomas Jefferson is famous for many things. Name one', 'Writer of the Declaration of Independence\nThird president of the United States\nDoubled the size of the United States (Louisiana Purchase)\nFirst Secretary of State\nFounded the University of Virginia\nWriter of the Virginia Statute on Religious Freedom'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 88, 'James Madison is famous for many things. Name one', '"Father of the Constitution"\nFourth president of the United States\nPresident during the War of 1812\nOne of the writers of the Federalist Papers'));
    this.allQuestions.push(new Question('American History', 'Colonial Period and Independence', 89, 'Alexander Hamilton is famous for many things. Name one', 'First Secretary of the Treasury\nOne of the writers of the Federalist Papers\nHelped establish the First Bank of the United States\nAide to General George Washington\nMember of the Continental Congress'));

    this.allQuestions.push(new Question('American History', '1800s', 90, 'What territory did the United States buy from France in 1803?', 'Louisiana Territory\nLouisiana'));
    this.allQuestions.push(new Question('American History', '1800s', 91, 'Name one war fought by the United States in the 1800s', 'War of 1812\nMexican-American War\nCivil War\nSpanish-American War'));
    this.allQuestions.push(new Question('American History', '1800s', 92, 'Name the U.S. war between the North and the South', 'The Civil War'));
    this.allQuestions.push(new Question('American History', '1800s', 93, 'The Civil War had many important events. Name one', '(Battle of) Fort Sumter\nEmancipation Proclamation\n(Battle of) Vicksburg\n(Battle of) Gettysburg\nSherman’s March\n(Surrender at) Appomattox\n(Battle of) Antietam/Sharpsburg\nLincoln was assassinated'));
    this.allQuestions.push(new Question('American History', '1800s', 94, 'Abraham Lincoln is famous for many things. Name one.', 'Freed the slaves (Emancipation Proclamation)\nSaved (or preserved) the Union\nLed the United States during the Civil War\n16th president of the United States\nDelivered the Gettysburg Address'));
    this.allQuestions.push(new Question('American History', '1800s', 95, 'What did the Emancipation Proclamation do?', 'Freed the slaves\nFreed slaves in the Confederacy\nFreed slaves in the Confederate states\nFreed slaves in most Southern states'));
    this.allQuestions.push(new Question('American History', '1800s', 96, 'What U.S. war ended slavery?', 'The Civil War'));
    this.allQuestions.push(new Question('American History', '1800s', 97, 'What amendment gives citizenship to all persons born in the United States?', '14th Amendment'));
    this.allQuestions.push(new Question('American History', '1800s', 98, 'When did all men get the right to vote?', 'After the Civil War\nDuring Reconstruction\n(With the) 15th Amendment\n1870'));
    this.allQuestions.push(new Question('American History', '1800s', 99, 'Name one leader of the women’s rights movement in the 1800s', 'Susan B. Anthony\nElizabeth Cady Stanton\nSojourner Truth\nHarriet Tubman\nLucretia Mott\nLucy Stone'));

    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 100, 'Name one war fought by the United States in the 1900s', 'World War I\nWorld War II\nKorean War\nVietnam War\n(Persian) Gulf War'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 101, 'Why did the United States enter World War I?', 'Because Germany attacked U.S. (civilian) ships\nTo support the Allied Powers (England, France, Italy, and Russia)\nTo oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 102, 'When did all women get the right to vote?', '1920\nAfter World War I\n(With the) 19th Amendment'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 103, 'What was the Great Depression?', 'Longest economic recession in modern history'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 104, 'When did the Great Depression start?', 'The Great Crash (1929)\nStock market crash of 1929'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 105, 'Who was president during the Great Depression and World War II?', '(Franklin) Roosevelt'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 106, 'Why did the United States enter World War II?', '(Bombing of) Pearl Harbor\nJapanese attacked Pearl Harbor\nTo support the Allied Powers (England, France, and Russia)\nTo oppose the Axis Powers (Germany, Italy, and Japan)'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 107, 'Dwight Eisenhower is famous for many things. Name one', 'General during World War II\nPresident at the end of (during) the Korean War\n34th president of the United States\nSigned the Federal-Aid Highway Act of 1956 (Created the Interstate System)'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 108, 'Who was the United States’ main rival during the Cold War?', 'Soviet Union\nUSSR\nRussia'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 109, 'During the Cold War, what was one main concern of the United States?', 'Communism\nNuclear war'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 110, 'Why did the United States enter the Korean War?', 'To stop the spread of communism'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 111, 'Why did the United States enter the Vietnam War?', 'To stop the spread of communism'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 112, 'What did the civil rights movement do?', 'Fought to end racial discrimination'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 113, 'Martin Luther King, Jr. is famous for many things. Name one.', 'Fought for civil rights\nWorked for equality for all Americans\nWorked to ensure that people would "not be judged by the color of their skin, but by the content of their character"'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 114, 'Why did the United States enter the Persian Gulf War?', 'To force the Iraqi military from Kuwait'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 115, 'What major event happened on September 11, 2001 in the United States?', 'Terrorists attacked the United States\nTerrorists took over two planes and crashed them into the World Trade Center in New York City\nTerrorists took over a plane and crashed into the Pentagon in Arlington, Virginia\nTerrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 116, 'Name one U.S. military conflict after the September 11, 2001 attacks', '(Global) War on Terror\nWar in Afghanistan\nWar in Iraq'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 117, 'Name one American Indian tribe in the United States', 'Apache\nBlackfeet\nCayuga\nCherokee\nCheyenne\nChippewa\nChoctaw\nCreek\nCrow\nHopi\nHuron\nInupiat\nLakota\nMohawk\nMohegan\nNavajo\nOneida\nOnondaga\nPueblo\nSeminole\nSeneca\nShawnee\nSioux\nTeton\nTuscarora\nFor a complete list of tribes, please visit bia.gov'));
    this.allQuestions.push(new Question('American History', 'Recent American History and Other Important Historical Information', 118, 'Name one example of an American innovation', 'Light bulb\nAutomobile (cars, internal combustion engine)\nSkyscrapers\nAirplane\nAssembly line\nLanding on the moon\nIntegrated circuit (IC)'));

    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 119, 'What is the capital of the United States?', 'Washington, D.C'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 120, 'Where is the Statue of Liberty?', 'New York (Harbor)\nLiberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 121, 'Why does the flag have 13 stripes?', '(Because there were) 13 original colonies\n(Because the stripes) represent the original colonies'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 122, 'Why does the flag have 50 stars?', '(Because there is) one star for each state\n(Because) each star represents a state\n(Because there are) 50 states'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 123, 'What is the name of the national anthem?', 'The Star-Spangled Banner'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Symbols', 124, 'The Nation’s first motto was "E Pluribus Unum." What does that mean?', 'Out of many, one\nWe all become one'));

    this.allQuestions.push(new Question('Symbols And Holidays', 'Holidays', 125, 'What is Independence Day?', 'A holiday to celebrate U.S. independence (from Britain)\nThe country’s birthday'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Holidays', 126, 'Name three national U.S. holidays.', 'New Year’s Day\nMartin Luther King, Jr. Day\nPresidents Day (Washington’s Birthday)\nMemorial Day\nIndependence Day\nLabor Day\nColumbus Day\nVeterans Day\nThanksgiving Day\nChristmas Day'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Holidays', 127, 'What is Memorial Day?', 'A holiday to honor soldiers who died in military service'));
    this.allQuestions.push(new Question('Symbols And Holidays', 'Holidays', 128, 'What is Veterans Day?', 'A holiday to honor people in the (U.S.) military\nA holiday to honor people who have served (in the U.S. military'));

  }

  getAllQuestions(): Question[] {
    return this.allQuestions;
  }

  getNextQuestion(alreadyAsked: Question[]): Question {
    let result: Question = new Question('', '', 0, '','');
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
