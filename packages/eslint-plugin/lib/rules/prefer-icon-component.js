const jsxAstUtils = require('jsx-ast-utils');

const fontAwesomeToIcon = {
  // Appointments
  'fa-calendar': 'calendar_today',
  'fa-building': 'location_city',
  'fa-phone-alt': 'phone',
  'fa-clock': 'schedule',
  'fa-video': 'videocam',

  // Feedback
  'fa-info-circle': 'info',
  'fa-circle-check': 'check_circle',
  'fa-exclamation-triangle': 'warning',
  'fa-exclamation-circle': 'error',
  'fa-lock': 'lock',
  'fa-check': 'check',

  // Health
  'fa-clipboard-list': 'assignment',
  'fa-dot-circle': 'adjust',
  'fa-deaf': 'hearing_disabled',

  // Hub
  'fa-star': 'star',
  'fa-briefcase': 'work',
  'fa-file-alt': 'description',
  'fa-graduation-cap': 'school',
  'fa-users': 'groups',
  'fa-medkit': 'medical_services',
  'fa-home': 'home',
  'fa-shield-alt': 'shield',
  'fa-handshake': 'handshake',
  'fa-id-card': 'identification',
  'fa-flag-usa': 'flag',

  // Identification
  'fa-phone': 'phone',
  'fa-map-marker-alt': 'location_on',
  'fa-road': 'directions',
  'fa-globe': 'language',
  'fa-question-circle': 'help',
  'fa-cog': 'settings',
  'fa-user-circle': 'account_circle',
  'fa-bullhorn': 'campaign',

  // Interaction
  'fa-plus': 'add',
  'fa-minus': 'remove',
  'fa-times': 'close',
  'fa-download': 'file_download',
  'fa-chevron-down': 'expand_more',
  'fa-chevron-up': 'expand_less',
  'fa-sort': 'unfold_more',
  'fa-trash-alt': 'delete',
  'fa-circle-xmark': 'cancel',
  'fa-spinner': 'autorenew',

  // Messaging
  'fa-paperclip': 'attach_file',
  'fa-folder': 'folder',
  'fa-envelope': 'mail',
  'fa-print': 'print',
  'fa-reply': 'undo',

  // Navigation
  'fa-angle-double-left': 'navigate_far_before',
  'fa-angle-double-right': 'navigate_far_next',
  'fa-external-link-alt': 'launch',
  'fa-chevron-right': 'navigate_next',
  'fa-chevron-left': 'navigate_before',
  'fa-arrow-down': 'arrow_downward',
  'fa-arrow-up': 'arrow_back',
  'fa-search': 'search',
  'fa-youtube': 'youtube',
  'fa-play-circle': 'play_circle',

  // Profile
  'fa-calendar-check': 'event_available',
  'fa-clipboard-check': 'assignment_turned_in',
  'fa-file-invoice-dollar': 'request_quote',
  'fa-dollar-sign': 'attach_money',
  'fa-comments': 'forum',
  'fa-file-medical': 'note_add',
  'fa-user-check': 'how_to_reg',
  'fa-prescription-bottle': 'medication',
  'fa-suitcase': 'work',

  // Social
  'fa-facebook': 'facebook',
  'fa-flickr': 'flickr',
  'fa-instagram': 'instagram',
  'fa-twitter': 'twitter',
  'fa-linkedin': 'linkedin',
  'fa-x': 'x'
};

const { elementType, getProp, getLiteralPropValue } = jsxAstUtils;

const MESSAGE =
  'The <va-icon> Web Component should be used instead of Font Awesome. See: https://design.va.gov/about/developers/using-web-components#how-to-migrate-from-font-awesome-to-va-icon';

function getIconNameFromClass(fontAwesomeClass) {
  return fontAwesomeToIcon[fontAwesomeClass] ? `${fontAwesomeToIcon[fontAwesomeClass]}` : null;
}

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
  },

  create(context) {
    return {
      JSXElement(node) {
        const iconNode = node.openingElement;
        const classNameProp = getProp(iconNode.attributes, 'className');
        const classValue = getLiteralPropValue(classNameProp);

          //  filter out font awesome classes
          const classNameClasses = classValue
          ?.split(' ')
          ?.filter(c => !c.includes('fa'))
          ?.join(' ');
          const fontAwesomeClass = classValue.split(' ').find(element => element.includes('fa-'));
          const iconName = getIconNameFromClass(fontAwesomeClass);

          const ariaLabelProp = getProp(iconNode.attributes, 'aria-label');
          const ariaLabelText = getLiteralPropValue(ariaLabelProp);

          const roleProp = getProp(iconNode.attributes, 'role');
          const altProp = getProp(iconNode.attributes, 'alt');

          if (classValue && classValue.includes('fa-')
          || elementType(iconNode) === 'i'){
          context.report({
            node,
            message: MESSAGE,
            fix: fixer => {
              return [
                // replace the original element name with va-icon
                fixer.replaceText(iconNode.name, 'va-icon'),

                // add the size prop
                fixer.insertTextAfter(iconNode.name, ` size={4}`),

                // add the icon prop with the mapped icon name
                fixer.insertTextAfter(iconNode.name, ` icon="${iconName}"`),

                // re-adding classes without font awesome classes
                classNameClasses && fixer.replaceText(classNameProp, `className="${classNameClasses}"`),

                // remove the className prop if there are no classes anymore
                classNameProp && !classNameClasses && fixer.remove(classNameProp),

                // replace aria-label with the srtext component prop
                ariaLabelProp && fixer.replaceText(ariaLabelProp, `srtext="${ariaLabelText}"`),

                // remove role - replaced by component internals
                roleProp && fixer.remove(roleProp),

                // remove alt - replaced by component internals
                altProp && fixer.remove(altProp),
              ];
            }
          });
        }
      },
    };
  },
};
