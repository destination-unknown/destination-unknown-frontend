import React from 'react'
import Collapsible from 'react-collapsible'

const App = () => {
  return (
    <div>
      <Collapsible tabIndex={0} trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible transitionTime={400} trigger="Then try this one">
        <p>Would you look at that!</p>
        <p>See; you can nest as many Collapsible components as you like.</p>

        <Collapsible trigger="Mmmmm, it's all cosy nested here">
          <p>
            And there's no limit to how many levels deep you go. Or how many you
            have on the same level.
          </p>

          <Collapsible trigger="This is just another Collapsible">
            <p>
              It just keeps going and going! Well, actually we've stopped here.
              But that's only because I'm running out of things to type.
            </p>
          </Collapsible>
          <Collapsible trigger="But this one is open by default!" open={true}>
            <p>
              And would you look at that! This one is open by default. Sexy
              huh!?
            </p>
            <p>
              You can pass the prop of open=&#123;true&#125; which will make the
              Collapsible open by default.
            </p>
          </Collapsible>
          <Collapsible
            trigger="That's not all. Check out the speed of this one"
            transitionTime={100}
          >
            <p>Whoosh! That was fast right?</p>
            <p>
              You can control the time it takes to animate (transition) by
              passing the prop transitionTime a value in milliseconds. This one
              was set to transitionTime=&#123;100&#125;
            </p>
          </Collapsible>
        </Collapsible>
      </Collapsible>

      <Collapsible
        transitionTime={400}
        trigger="This one will blow your mind."
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
      >
        <p>
          Well maybe not. But did you see that little wiggle at the end. That is
          using a CSS cubic-beizer for the easing!
        </p>
        <p>
          You can pass any string into the prop easing that you would declare in
          a CSS transition-timing-function. This means you have complete control
          over how that Collapsible appears.
        </p>
      </Collapsible>

      <Collapsible
        transitionTime={400}
        trigger="Oh and did I mention that I'm responsive?"
        triggerWhenOpen="Plus you can change the trigger text when I'm open too"
      >
        <p>
          That's correct. This collapsible section will animate to the height it
          needs to and then set it's height back to auto.
        </p>
        <p>
          This means that no matter what width you stretch that viewport to, the
          Collapsible it will respond to it.
        </p>
        <p>
          And no matter what height the content within it is, it will change
          height too.
        </p>
        <h2>CSS Styles</h2>
        <p>
          All of the style of the Collapsible (apart from the overflow and
          transition) are controlled by your own CSS too.
        </p>
        <p>
          By default the top-level CSS class is Collapsible, but you have
          control over this too so you can easily add it into your own project.
          Neato!
        </p>
        <p>
          So by setting the prop of
          classParentString=&#123;"MyNamespacedClass"&#125; then the top-level
          class will become MyNamespacedClass.
        </p>
      </Collapsible>

      <Collapsible
        lazyRender
        transitionTime={600}
        trigger="What happens if there's a shed-load of content?"
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
        overflowWhenOpen="visible"
      >
        <p>
          Add the prop of{' '}
          <strong style={{ fontWeight: 'bold' }}>lazyRender</strong> and the
          content will only be rendered when the trigger is pressed
        </p>
        <img src="https://lorempixel.com/320/240?random=1" />
        <img src="https://lorempixel.com/320/240?random=2" />
        <img src="https://lorempixel.com/320/240?random=3" />
        <img src="https://lorempixel.com/320/240?random=4" />
        <img src="https://lorempixel.com/320/240?random=5" />
        <img src="https://lorempixel.com/320/240?random=6" />
      </Collapsible>

      <Collapsible
        trigger="You can set a custom trigger tag name."
        triggerTagName="div"
      >
        <p>
          Use the <code>`triggerTagName`</code> prop to set the trigger wrapping
          element.
        </p>
        <p>
          Defaults to <code>span</code>.
        </p>
      </Collapsible>

      <Collapsible
        trigger="You can customise the CSS a bit more too"
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open"
        contentOuterClassName="CustomOuterContentCSS"
        contentInnerClassName="CustomInnerContentCSS"
      >
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
      </Collapsible>

      <Collapsible
        trigger="You can disable them programmatically too"
        open
        triggerDisabled
      >
        <p>This one has it's trigger disabled in the open position. Nifty.</p>
        <p>
          You also get the <strong>is-disabled</strong> CSS class so you can
          style it.
        </p>
      </Collapsible>

      <Collapsible
        trigger="You can have siblings to the trigger too which won't trigger the Collapsible"
        triggerSibling={triggerSiblingExample}
      >
        <p>This one has it's trigger disabled in the open position. Nifty.</p>
        <p>
          You also get the <strong>is-disabled</strong> CSS class so you can
          style it.
        </p>
      </Collapsible>

      <Collapsible
        trigger={'Add a triggerStyle Prop to add style directly to the trigger'}
        triggerStyle={{ background: '#2196f3' }}
      >
        <p>
          Adds a <code>style</code> attribute to the <code>span</code> trigger.
        </p>
      </Collapsible>
      <Collapsible
        trigger="Pass properties to top element"
        containerElementProps={{ id: 'my-cool-identifier', lang: 'en' }}
        triggerStyle={{ background: '#6821f3' }}
      >
        <p>
          Some element attributes (<strong>id & lang</strong>) have been passed
          as properties using <strong>containerElementProps</strong>.
        </p>
        <div style={{ display: 'grid' }}>
          <img src="https://lorempixel.com/320/240?random=1" />
          <img src="https://lorempixel.com/320/240?random=2" />
          <img src="https://lorempixel.com/320/240?random=3" />
          <img src="https://lorempixel.com/320/240?random=4" />
          <img src="https://lorempixel.com/320/240?random=5" />
          <img src="https://lorempixel.com/320/240?random=6" />
        </div>
        <div style={{ padding: '50px' }}>
          <button
            onClick={() =>
              document.getElementById('my-cool-identifier').scrollIntoView()
            }
          >
            Scroll to my id
          </button>
        </div>
      </Collapsible>
    </div>
  )
}
