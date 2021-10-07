class FeatureDataObject {
  constructor(title, subtitle, description, image, isLightTheme) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
    this.isLightTheme = isLightTheme;
  }
}

const newFeatureData = (...args) => {
  return new FeatureDataObject(...args);
};

export const FeatureData = [
  {
    intro: newFeatureData(
      'Spend smarter every day',
      'Everyday needs',
      'Track your money all in one place and make your daily spending seamless',
      ''
    ),
    cardMeta: [
      newFeatureData(
        'Payments → ',
        'Pay and get paid hassle-free',
        'Make payments in seconds in 30+ countries. Split and settle bills without stress',
        '/img/feature-background.jpg',
        false
      ),
      newFeatureData(
        'Budgeting & Analytics → ',
        'Never overspend again with smart budgeting',
        '',
        '/img/GlobalInsurance_Mobile.jpg',
        true
      ),
      newFeatureData(
        'Open Banking → ',
        'Link all your accounts in one place',
        '',
        '/img/Lounge_Mobile.jpg',
        false
      ),
      newFeatureData(
        'Cards → ',
        'Card, meet phones',
        'Link your card to Google Pay or Apply Pay to pay straight away from your phone. Shop confidently online with single-se card details',
        '/img/feature-background.jpg',
        false
      ),
    ],
  },
];
